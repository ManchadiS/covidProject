import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyInfoPage } from './family-info';

@NgModule({
  declarations: [
    FamilyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyInfoPage),
  ],
})
export class FamilyInfoPageModule {}
