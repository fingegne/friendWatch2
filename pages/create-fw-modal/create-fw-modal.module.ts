import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateFwModalPage } from './create-fw-modal';

@NgModule({
  declarations: [
    CreateFwModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateFwModalPage),
  ],
})
export class CreateFwModalPageModule {}
