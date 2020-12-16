import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FamilyInfoPage  } from '../family-info/family-info';
/**
 * Generated class for the AddFamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-family',
  templateUrl: 'add-family.html',
})
export class AddFamilyPage {
  familyInfo = [{"name":"Nand Lal"},
  {"name":"Pooja Devi"}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFamilyPage');
  }

  gotoInfo() {
    this.navCtrl.push(FamilyInfoPage);
  }
}
