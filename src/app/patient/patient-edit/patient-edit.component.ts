import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../../core/services/data.service';
import { ModalService, IModalContent } from '../../core/modal/modal.service';
import { IPatient } from '../../shared/interfaces';
import { notifierService, notifierMessageType } from '../../core/notifier/notifier.service';

@Component({
  selector: 'cm-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
}) 
export class PatientEditComponent implements OnInit {

  patient: IPatient =
    {
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      age: 0,
      email: '',
      mobile: '',
      doctorID: '',
      patientID: "0"
    };
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  @ViewChild('patientForm', { static: true }) patientForm: NgForm;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private notifier: notifierService,
    private modalService: ModalService,
    ) { }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Don't technically need that here
    // since param won't be changing while component is alive.
    // Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent.params.subscribe((params: Params) => {
      let patientID = params['patientID'];
      console.log("patientID Edit onInit()", patientID)
      console.log("patientID Type", typeof (patientID))

      if (patientID !== '0') {
        this.operationText = 'Update';
        this.getPatient(patientID);
      }
    });
  }

  getPatient(patientID: string) {
    this.dataService.getPatient(patientID).subscribe((patient: IPatient) => {
      this.patient = patient;
    });
  }

  submit() {
    console.log("Edit Submit patientID", this.patient.patientID)
    if (this.patient.patientID === "0") {
      console.log("Patient id 0", this.patient)
      this.dataService.insertPatient(this.patient)
        .subscribe((insertedPatient: IPatient) => {
          if (insertedPatient) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.patientForm.form.markAsPristine();
            this.router.navigate(['/patients']);
          } else {
            const msg = 'Unable to insert patient';
            this.notifier.notif(msg, notifierMessageType.Danger);
            //console.log("Unable to insert patient");
            this.errorMessage = msg;
          }
        },
          (err: any) => console.log(err));
    } else {
      this.dataService.updatePatient(this.patient)
        .subscribe((success: boolean) => {
          console.log("Update Success:", success);
          if (success) {
            // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.patientForm.form.markAsPristine();
            this.notifier.notif('Operation performed successfully.', notifierMessageType.Success);
            //console.log("Operation performed successfully.");
            this.router.navigate(['/patients', this.patient.patientID, 'details']);
          } else {
            const msg = 'Unable to update patient';
            this.notifier.notif(msg, notifierMessageType.Danger);
            //console.log("Unable to update patient");
            this.errorMessage = msg;
          }
        },
          (err: any) => console.log(err));
    }
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/patients']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deletePatient(this.patient.doctorID, this.patient.patientID)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigate(['/patients']);
        } else {
          this.errorMessage = 'Unable to delete patient';
        }
      },
        (err) => console.log(err));
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.patientForm.dirty) {
      return true;
    }

    // Showing dialog to user to confirm, before leaving the page
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    };
    return this.modalService.show(modalContent);
  }

}
