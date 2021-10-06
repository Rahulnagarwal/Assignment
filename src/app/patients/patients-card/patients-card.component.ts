import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IPatient } from '../../shared/interfaces';
import { TrackByService } from '../../core/services/trackby.service';

@Component({
  selector: 'cm-patients-card',
  templateUrl: './patients-card.component.html',
  styleUrls: [ './patients-card.component.css' ],
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsCardComponent implements OnInit {

  @Input() patients: IPatient[] = [];

  constructor(public trackbyService: TrackByService) { }

  ngOnInit() {

  }

}

