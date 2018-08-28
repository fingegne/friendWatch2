import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateFwModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-fw-modal',
  templateUrl: 'create-fw-modal.html',
})
export class CreateFwModalPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }


 // ionViewDidLoad() {
  //  console.log('ionViewDidLoad CreateFwModalPage');
 // }


}
