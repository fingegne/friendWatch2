import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import CreateFWModalPage from '../create-fw-modal/create-fw-modal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  openModal(){
    const myCreateFWModal = this.modalCtrl.create('CreateFWModalPage');

    myCreateFWModal.present();
  }

}
