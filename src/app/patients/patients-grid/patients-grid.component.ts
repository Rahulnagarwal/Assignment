import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SorterService } from '../../core/services/sorter.service';
import { TrackByService } from '../../core/services/trackby.service';
import { IPatient } from '../../shared/interfaces';

@Component({
  selector: 'cm-patients-grid',
  templateUrl: './patients-grid.component.html',
  styleUrls: ['./patients-grid.component.css'],
  // When using OnPush detectors, then the framework will check an OnPush
  // component when any of its input properties changes, when it fires
  // an event, or when an observable fires an event 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsGridComponent implements OnInit {

  @Input() patients: IPatient[] = [];

  constructor(private sorterService: SorterService, public trackbyService: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
    this.patients = this.sorterService.sort(this.patients, prop);
  }

}
