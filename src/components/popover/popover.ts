import { Component } from '@angular/core';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  create(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  text: string;
  popoverCtrl: any;

  constructor() {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }
}
