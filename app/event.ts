import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home'
})
export class EventPage {
    title = 'penorlito';
    constructor(public navCtrl: NavController) {
    }
//    selectedItem: any;
//    constructor(public navCtrl: NavController, public navParams: NavParams) {
//       this.selectedItem = navParams.get('item');
//    }
}