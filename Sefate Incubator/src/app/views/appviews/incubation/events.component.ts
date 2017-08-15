import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import {CalendarComponent} from 'ap-angular2-fullcalendar';
// other imports
declare var jQuery: any;

@Component({
  selector: 'eventmanager',
  templateUrl: 'events.component.html'
})

export class EventsComponent implements OnDestroy, OnInit {

  calendarOptions: Object = {
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01',
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ],
    //eventClick: this.calendarOptions();
  };

  constructor(public router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  public ngOnDestroy(): any {
  }
}


