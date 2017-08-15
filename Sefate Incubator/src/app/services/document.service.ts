
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { WorkItemRequirements } from '../requirements/workItemRequirement';
import { WorkItem } from '../workItem/workItem';
import { WorkItemField } from '../requirements/field';
import { DocumentField } from '../requirements/documentField';
import { StarterViewComponent } from '../views/appviews/starterview.component';
import { Http, Response, RequestOptionsArgs, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { WorkItemDocument } from '../requirements/workIremDocument';
import { StageUpdateView } from '../requirements/stageUpdate';
@Injectable()
export class DocumentService {

        private _updateDocumentStatusAPI  = 'http://localhost:63020/api/document/updateStatus';

        constructor(public requirementService: DataService, private http: Http) { }

        private prepareOptions = (options: RequestOptionsArgs): RequestOptionsArgs => {
            options = options || {};

            if (!options.headers) {
                options.headers = new Headers();
            }

            options.headers.append('Content-Type', 'application/json');

            return options;
        }

        updateItemStatus(workItem: WorkItemDocument) {
            this.requirementService.set(this._updateDocumentStatusAPI);
            return this.requirementService.put(JSON.stringify(workItem));
        }
}
