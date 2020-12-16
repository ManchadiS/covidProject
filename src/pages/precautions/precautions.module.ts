import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrecautionsPage } from './precautions';

@NgModule({
  declarations: [
    PrecautionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrecautionsPage),
  ],
})
export class PrecautionsPageModule {}
