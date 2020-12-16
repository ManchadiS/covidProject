import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabInfoPage } from './lab-info';

@NgModule({
  declarations: [
    LabInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LabInfoPage),
  ],
})
export class LabInfoPageModule {}
