import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the HelplinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helplines',
  templateUrl: 'helplines.html',
})
export class HelplinesPage {
  loading: any;
  states = [];
  selectedState = "all";
  helplineData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController, public apiProvider: ApiProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
    console.log('ionViewDidLoad HelplinesPage');
    this.getStateData();
  }

  getStateData() {
    this.http.get('assets/data/states.json').subscribe((res: any) => {
      console.log(res);
      this.states = res;
      this.getAllHelpLineNumbers();
      // console.log(this.states);
    },
      (err) => {
        alert('failed loading json data');
      });
  }


  getAllHelpLineNumbers() {
    this.helplineData = [];
    this.apiProvider.getAllHelpLineNumbers().subscribe((response: any) => {
      this.loading.dismiss();
      console.log(response);
      if (response.length > 0) {
        this.helplineData = response;
      }
    }, (error: any) => {
      this.loading.dismiss();
      console.log(error);
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: error.message ? error.message : 'Something went wrong,Please try again later!!',
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  getHelplineByState(stateName) {
    console.log(stateName);
    this.helplineData = [];
    if (stateName == 'all') {
      this.getAllHelpLineNumbers();
    } else {
      this.apiProvider.getHelpLineNumberByState(stateName).subscribe((response: any) => {
        this.loading.dismiss();
        console.log(response);
        if (response.length > 0) {
          this.helplineData = response;
        }
      }, (error: any) => {
        this.loading.dismiss();
        console.log(error);
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message ? error.message : 'Something went wrong,Please try again later!!',
          buttons: ['Ok']
        });
        alert.present();
      });
    }
  }

}
