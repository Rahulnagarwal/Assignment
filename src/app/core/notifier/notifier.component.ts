import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { notifierService, notifierMessageType } from './notifier.service';

@Component({
  selector: 'cm-notifier',
  template: `
    <div [ngClass]="position" class="notifier">
      <div *ngFor="let notif of notifs" [ngClass]="{active: notif.enabled}"
          class="notif alert {{ notif.messageType }}">
          <span class="notif-message">{{ notif.message }}</span>
      </div>
    </div>
  `,
  styleUrls: ['notifier.component.css']
})
export class notifierComponent implements OnInit {

  private notifCount = 0;
  notifs: Notif[] = [];

  @Input() position = 'bottom-right';
  @Input() timeout = 3000;

  constructor(private notifierService: notifierService) {
    notifierService.notif = this.notif.bind(this);
  }

  ngOnInit() { }

  /**
  * Displays a notif message.
  *
  * @param {string} message - The message to display.
  * @param {notifMessageType} notifType - The type of message to display (a notifMessageType enumeration)
  * @return {number} id - Returns the ID for the generated notif
  */
  notif(message: string, notifType: notifierMessageType): number {
     this.notifCount++;
     const AlertType = notifierMessageType[notifType].toLowerCase();
     const messageType = `alert-${ AlertType }`;

     const notif = new Notif(this.notifCount, message, messageType, this.timeout, this);
     this.notifs.push(notif);
     return notif.id;
  }

  removenotif(id: number) {
    this.notifs.forEach((notif: Notif, index: number) => {
      if (notif.id === id) {
        this.notifs.splice(index, 1);
        this.notifCount--;
        console.log('removed ' + id);
      }
    });
  }
}

class Notif {

  enabled: boolean;
  timeoutId: number;

  constructor(public id: number,
              public message: string,
              public messageType: string,
              private timeout: number,
              private notifierContainer: notifierComponent) {
    this.show();
  }

  show() {
    window.setTimeout(() => {
      this.enabled = true;
      this.setTimeout();
    }, 0);
  }

  setTimeout() {
    window.setTimeout(() => {
      this.hide();
    }, this.timeout);
  }

  hide() {
    this.enabled = false;
    window.setTimeout(() => {
      this.notifierContainer.removenotif(this.id);
    }, this.timeout);
  }

}
