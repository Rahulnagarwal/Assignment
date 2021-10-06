import { Injectable } from '@angular/core';

import { IPatient } from '../../shared/interfaces';

@Injectable()
export class TrackByService {

  patient(index: number, patient: IPatient) {
    return patient.patientID;
  }

}
