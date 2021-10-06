import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPatient, IPagedResults, IApiResponse } from '../../shared/interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
    baseUrl = "https://us-central1-tusc-91a8b.cloudfunctions.net/app";
    uid = "";

    constructor(private http: HttpClient, private authService: AuthService) {
        this.uid = authService.uid;
    }
    
    getPatientsPage(page: number, pageSize: number): Observable<IPagedResults<IPatient[]>> {
        return this.http.post<IPagedResults<IPatient[]>>(
            `${this.baseUrl}/getPatientsPage`, { doctorID: this.uid, orderBy: "registrationTimestamp", skip: page, pageSize: pageSize },
            { observe: 'response' })
            .pipe(
                map(res => {
                    // const patients = res.body.results as IPatient[];
                    // const totalRecords = res.body.totalRecords
                    // let ret = {
                    //     results: patients,
                    //     totalRecords: totalRecords
                    // };
                    // console.log("ret", ret.results)
                    // console.log("totalRecords", ret.totalRecords)
                    // return ret;
                    return res.body;
                }),
                catchError(this.handleError)
            );
    }

    getPatient(patientID: string): Observable<IPatient> {
        return this.http.post<IPatient>(this.baseUrl + '/getPatient', { doctorID: this.uid, patientID: patientID })
            .pipe(
                map(patient => {
                    return patient;
                }),
                catchError(this.handleError)
            );
    }

    insertPatient(patient: IPatient): Observable<IPatient> {
        patient.doctorID = this.uid;
        return this.http.post<IPatient>(this.baseUrl + "/addPatient", patient)
            .pipe(
                catchError(this.handleError)
            );
    }

    updatePatient(patient: IPatient): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + '/updatePatient', patient)
            .pipe(
                map(res => res.success),
                catchError(this.handleError)
            );
    }

    deletePatient(doctorID: string, patientID: string): Observable<boolean> {
        return this.http.post<IApiResponse>(this.baseUrl + '/deletePatient', { doctorID: doctorID, patientID: patientID })
            .pipe(
                map(res => res.success),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
