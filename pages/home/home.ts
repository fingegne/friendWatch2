import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: Array<{title: string, address: string, date: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.events = [];
    this.events.push({
      title: 'Winter Formal',
      address: 'Stanford University',
      date: 'April 17'
    });
    this.events.push({
      title: 'Phi Psi Social',
      address: '592 Mayfield Ave',
      date: 'May 3'
    });
  }

  openModal() {
    const myModal = this.modalCtrl.create('ModalPage', {data: this.events});

    myModal.present();
  }

}
