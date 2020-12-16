import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddFamilyPage  } from '../add-family/add-family';
import { SelfAssessmentPage  } from '../self-assessment/self-assessment';
import { ExternalProvider } from '../../providers/external/external';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private extapiProvider : ExternalProvider) {
      // this.getAllCountryStats();
  }

  getAllCountryStats() {
    this.extapiProvider.getAllCountryStats().subscribe((res: any) => {
      console.log(res);
    }, (error: any) => {});
  }
  
  gotoAddFam() {
    this.navCtrl.push(AddFamilyPage);
  }

  gotoAssessment() {
    this.navCtrl.push(SelfAssessmentPage);
  }
}

