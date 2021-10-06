import {
  Component, OnInit, ViewChild,
  ViewContainerRef, ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IPatient, IPagedResults } from '../shared/interfaces';
import { FilterService } from '../core/services/filter.service';

@Component({
  selector: 'cm-patients',
  templateUrl: './patients.component.html'
})
export class PatientsComponent implements OnInit {

  title: string;
  filterText: string;
  patients: IPatient[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 3;
  _filteredPatients: IPatient[] = [];

  get filteredPatients() {
    return this._filteredPatients;
  }

  set filteredPatients(value: IPatient[]) {
    this._filteredPatients = value;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private dataService: DataService,
    private filterService: FilterService,
     ) {
      this.getPatientsPage(1);
     }

  ngOnInit() {
    this.title = 'Patients';
    this.filterText = 'Filter Patients:';
    this.displayMode = DisplayModeEnum.Card;

  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getPatientsPage(page);
  }

  getPatientsPage(page: number) {
    this.dataService.getPatientsPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<IPatient[]>) => {
        this.patients = this.filteredPatients = response.results;
        this.totalRecords = response.totalRecords;
        console.log("Component: Patients:", this.patients)
        console.log("Component: Count:", this.totalRecords)
      },
        (err: any) => console.log(err),
        () => console.log('getPatientsPage() retrieved patients for page: ' + page));
  }

  filterChanged(data: string) {
    if (data && this.patients) {
      data = data.toUpperCase();    // uppercase the data which is for search bcz we want searching case insensitive.
      const props = ['firstName', 'lastName', 'mobile', 'email', 'address' ];
      this.filteredPatients = this.filterService.filter<IPatient>(this.patients, data, props);
    } else {
      this.filteredPatients = this.patients;
    }
  }
}

//Enum aloow us to declare a set of named constant (Numeric,string,hetrogeneous). TS support revrse mapping.
enum DisplayModeEnum {
  Card = 0,
  Grid = 1
}
