import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage  } from '../report/report';
/**
 * Generated class for the FamilyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-info',
  templateUrl: 'family-info.html',
})
export class FamilyInfoPage {
  familyInfo = [{"name":"Nand Lal"},
  {"name":"Pooja Devi"},
  {"name":"Karan Kumar"},
  {"name":"Vijay Kumar"}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyInfoPage');
  }

  proceed() {
    this.navCtrl.push(ReportPage);
  }

}
