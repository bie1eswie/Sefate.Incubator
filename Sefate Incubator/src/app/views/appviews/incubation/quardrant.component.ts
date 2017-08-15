import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Registration } from '../../account/registration';
import { OperationResult } from '../../../utilities/operationResult';
import { MembershipService } from '../../../services/membership.service';
import { RequiremntService } from '../../../services/requirements.service';
import { Client } from '../../../workItem/client';
import { WorkItem } from '../../../workItem/workItem';
import { WorkItemRequirements } from '../../../requirements/workItemRequirement';
import { WorkItemField } from '../../../requirements/field';
import { NotificationService } from '../../../services/notification.service';
import { WorkItemStatusInfor } from '../../../workItem/workItemStatusInfor';
import { StarterViewComponent } from '../starterview.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { WorkItemStage } from '../../../requirements/workItemStage';
import { saveAs } from 'file-saver';
import { WorkItemDocument } from '../../../requirements/workIremDocument';
import { Response } from '@angular/http';
import { User } from '../../account/user';
import { CommonLists } from '../../../utilities/sefate.constants.Lists';
import { StageUpdateView } from '../../../requirements/stageUpdate';
import { DocumentService } from '../../../services/document.service';
import { IncubationService } from '../../../services/incubation.service';
import { IncubatorRequirement } from '../../../requirements/incubation/incubatorRequirement';
import { IncubatorQuardrant } from '../../../requirements/incubation/incubatorQuardrant';
import { WorkItemIncubatorComments } from '../../../requirements/incubation/workItemIncubatorComments';
import { QuarterMilestone } from '../../../requirements/incubation/quarterMilestone';
import { QuardrantQuarter } from '../../../requirements/incubation/quardrantQuarter';
import { FieldSet } from '../../../requirements/fieldSet';
import { CalculationManager } from '../../../utilities/calculationManager';

declare var jQuery: any;

@Component({
  selector: 'app-quardrant-selectoe',
  templateUrl: 'quardrant.component.html'
})
export class QuardrantComponent implements OnInit {

  public quardrant: IncubatorQuardrant;
  public workItemIncubatorComments: WorkItemIncubatorComments[];
  public currentQuarter: QuardrantQuarter;
  public emptyQuarter: QuardrantQuarter;
  public workItem: WorkItem;
  public errorMessage: String;
  // Comment Form
  public commentForm: FormGroup;
  public commentShortDescription: FormControl;
  public comment: FormControl;
  public currentWorkItemIncubatorComments: WorkItemIncubatorComments;

  // Milestone Form
  public milestoneForm: FormGroup;
  public shortDescription: FormControl;
  public description: FormControl;
  public currentQuarterMilestone: QuarterMilestone;

  constructor(public router: Router, public requirementService: IncubationService,
    public notificationService: NotificationService, public documentService: DocumentService,
    private route: ActivatedRoute, private builder: FormBuilder) {
  }
  ngOnInit() {
    this.quardrant = JSON.parse(localStorage.getItem('quardrantView'));
    this.workItem = JSON.parse(localStorage.getItem('workItem'));
    this.workItemIncubatorComments = JSON.parse(localStorage.getItem('comments'));
    this.currentWorkItemIncubatorComments = new WorkItemIncubatorComments();
    this.currentQuarterMilestone = new QuarterMilestone();
    this.emptyQuarter = this.quardrant.quardrantQuarters[0];
    this.currentQuarter = this.quardrant.quardrantQuarters[0];
    this.CleanEmptyQuarter();
    this._formGroup();

  }

  //Form Group
  _formGroup() {
    this.comment = new FormControl('', Validators.required);
    this.commentShortDescription = new FormControl('', Validators.required);
    this.commentForm = this.builder.group({
      comment: this.comment,
      commentShortDescription: this.commentShortDescription,
    });

    this.shortDescription = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.milestoneForm = this.builder.group({
      shortDescription: this.shortDescription,
      description: this.description,
    });
  }

  addFile(event: any, field: WorkItemField): void {
    const fi = event.target;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];
      if (field.fieldValue != null && field.fieldValue.length > 0) {
        field.isNew = false;
      }
      field.fieldValue = fileToUpload.name;
      field.isDirty = field.isDirty;
      //this.requirementService
      //.upload(fileToUpload, field)
      //.subscribe(res => {
      // console.log(res);
      //});
    }
  }

  updateRequirementAfterSelect(event: any, field: WorkItemField, tabIndex: number) {
    field.isDirty = true;
    if (field.hasDependends) {
      // this.UpdateRequirement();
      // this.GetWorkItemRequirements();
      // this.ValidateRequirement();
      // this.setActiveTab(tabIndex);
    }
  }

  OnfieldChanged(event: any, currentField: WorkItemField): void {
    // currentField.isNew = !currentField.isNew;
    currentField.isDirty = true;
  }

  public AddComment() {
    const newComment = new WorkItemIncubatorComments();
    const array = (new Date().toTimeString().split(' '));
    newComment.commentText = this.currentWorkItemIncubatorComments.commentText;
    newComment.createdDateTime = array[0] + ',' + array[1] + ',' + array[2] + ',' + array[3];
    newComment.shortDescription = this.currentWorkItemIncubatorComments.shortDescription;
    newComment.workItemID = this.workItem.workItemID;
    newComment.isNew = true;
    // this.currentWorkItemIncubatorComments.createdDateTime = new Date();
    if (this.workItemIncubatorComments) {
      this.workItemIncubatorComments.push(newComment);
    } else {
      this.workItemIncubatorComments = [newComment];
    }
    this.requirementService.addComment(newComment)
      .subscribe((res: any) => {
        if (res.succeeded) {

        }
      });
    jQuery('#commentModal').modal('hide');
  }

  public AddMilestone() {
    const newMilestome = new QuarterMilestone();
    const array = (new Date().toTimeString().split(' '));
    newMilestome.endDate = array[0];
    newMilestome.isNew = true;
    newMilestome.quarterID = this.currentQuarter.quarterID;
    newMilestome.description = this.currentQuarterMilestone.description;
    newMilestome.shorDescription = this.currentQuarterMilestone.shorDescription;
    if (this.currentQuarter.quarterMilestones) {
      this.currentQuarter.quarterMilestones.push(newMilestome);
    } else {
      this.currentQuarter.quarterMilestones = [newMilestome];
    }

    debugger;

    this.requirementService.addMilestone(newMilestome)
      .subscribe((res: any) => {
        if (res.succeeded) {

        }
      });

    jQuery('#milestoneModal').modal('hide');
  }

  public ShowCommentModal() {
    jQuery('#commentModal').modal('show');
    this.currentWorkItemIncubatorComments = new WorkItemIncubatorComments();
  }

  public ShowMilestoleModal() {
    jQuery('#milestoneModal').modal('show');
    this.currentQuarterMilestone = new QuarterMilestone();
  }

  public UpdateQuardrant(): void {
    debugger;
    const _authenticationResult: OperationResult = new OperationResult(false, '');
    const valid = this.ValidateRequirement();
    this.quardrant.isValid = valid;
    this.requirementService.updateQuardrant(this.quardrant)
      .subscribe((res: any) => {
        _authenticationResult.succeeded = res.succeeded;
        _authenticationResult.message = res.message;
        if (_authenticationResult.succeeded) {
          this.errorMessage = res.message;
          jQuery('#errorModal').modal('show');
        } else {
          this.errorMessage = res.message;
          jQuery('#errorModal').modal('show');
        }
      });
  };

  public AddNewQuarterModal() {
    const quarter = new QuardrantQuarter();
    quarter.name = 'Quarter ' + (this.quardrant.quardrantQuarters.length + 1);
    quarter.active = true;
    quarter.fieldSetGroups = this.emptyQuarter.fieldSetGroups;
    quarter.isDirty = false;
    quarter.isNew = true;
    quarter.quardrantID = this.quardrant.incubatorQuardrantID;
    quarter.workItem = this.workItem.workItemID;
    // this.quardrant.quardrantQuarters.push(quarter);
    this.requirementService.addQuarter(quarter)
      .subscribe((res: any) => {
        if (res.succeeded) {
          this.quardrant.quardrantQuarters.push(res.quardrantQuarter);
          this.currentQuarter = res.quardrantQuarter;
        }
      });
  }

  public AddNewQuarter() {

  }

  private CleanEmptyQuarter() {
    if (this.emptyQuarter.fieldSetGroups) {
      for (let j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
        const currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
        for (let t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
          const currentFieldSet = currentFieldSetGroup.fieldSets[t];
          if (currentFieldSet) {
            if (currentFieldSet.workItemFields) {
              for (let i = 0; i < currentFieldSet.workItemFields.length; i++) {
                const currentField = currentFieldSet.workItemFields[i];
                if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                  continue;
                } else {
                  currentField.fieldValue = '';
                  currentField.isNew = true;
                  currentField.isDirty = false;
                }
              }
            }
          }
        }
      }
    }
  }

  public CalculateFinancials(fieldset: FieldSet, quarter: QuardrantQuarter) {



    if (this.emptyQuarter.fieldSetGroups) {
      for (let j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
        const currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
        for (let t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
          const currentFieldSet = currentFieldSetGroup.fieldSets[t];
          if (currentFieldSet) {
            if (currentFieldSet.code === '18' || currentFieldSet.code === '17') {
              currentFieldSet.isHidden = false;
              if (currentFieldSet.workItemFields) {
                for (let i = 0; i < currentFieldSet.workItemFields.length; i++) {
                  const currentField = currentFieldSet.workItemFields[i];
                  let first = 0;
                  let second = 0;
                  const rev = +fieldset.workItemFields.find(x => x.mapCode === '35').fieldValue;;
                  switch (currentField.code) {
                    case '50':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '41').fieldValue;
                      second = rev;
                      currentField.fieldValue = CalculationManager.calculateProfitmargin(+first, +second).toString();
                      break;
                    case '51':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '36').fieldValue;
                      second = rev;
                      currentField.fieldValue = CalculationManager.calculateGrossProfitMargin(+first, +second).toString();
                      break;
                    case '52':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '42').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '37').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateCashGeneratingAbilityRatio(+first,+second).toString();
                      break;
                    case '53':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '45').fieldValue;
                      second = rev;
                      currentField.fieldValue = CalculationManager.calculateDebtorsDays(+first,+second).toString();
                      break;
                    case '54':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '47').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '36').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateCreditorsDays(+first, +second).toString();
                      break;
                    case '55':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '46').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '36').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateInventoryDays(+first,+second).toString();
                      break;
                    case '56':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '43').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '48').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateSolvencyTest(+first, +second).toString();
                      break;
                    case '57':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '44').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '38').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateLiquidityTest(+first, +second).toString();
                      break;
                    case '58':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '44').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '46').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateAcidTest(+first, +second).toString();
                      break;
                    case '59':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '48').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '49').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateGearing(+first, +second).toString();
                      break;
                    case '60':
                      first = +fieldset.workItemFields.find(x => x.mapCode === '41').fieldValue;
                      second = +fieldset.workItemFields.find(x => x.mapCode === '49').fieldValue;
                      currentField.fieldValue = CalculationManager.calculateReturnOnEquity(+first, +second).toString();
                      break;
                  }

                }
              }
            }
          }
        }
      }
    }
  }

  private ValidateRequirement(): boolean {
    let result = true;
    if (this.emptyQuarter.fieldSetGroups) {
      for (let j = 0; j < this.emptyQuarter.fieldSetGroups.length; j++) {
        const currentFieldSetGroup = this.emptyQuarter.fieldSetGroups[j];
        for (let t = 0; t < currentFieldSetGroup.fieldSets.length; t++) {
          const currentFieldSet = currentFieldSetGroup.fieldSets[t];
          if (currentFieldSet) {
            if (currentFieldSet.workItemFields) {
              for (let i = 0; i < currentFieldSet.workItemFields.length; i++) {
                const currentField = currentFieldSet.workItemFields[i];
                if (currentField.fieldValue === '' || currentField.fieldValue === null) {
                  if (currentField.isRequired) {
                    currentField.isValid = false;
                    currentField.isDirty = false;
                    currentField.errorMessage = currentField.name + ' ' + 'is required';
                    result = result && false;
                  } else {
                    result = result && true;
                    currentField.errorMessage = '';
                  }
                }
              }
            }
          }
        }
      }
    }
    return result;
  }

}
