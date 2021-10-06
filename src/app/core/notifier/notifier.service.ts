import { Injectable } from '@angular/core';

@Injectable()
export class notifierService {

    constructor() { }

    notif: (message: string, notifType: notifierMessageType) => number;

}

export enum notifierMessageType {
  Success,
  Danger,
  Warning,
  Info
}
