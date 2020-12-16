import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the LabInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-info',
  templateUrl: 'lab-info.html',
})
export class LabInfoPage implements OnInit {
  states = [];
  selectedState = "all";
  labsData = [];
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController, public apiProvider: ApiProvider, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.loading = this.loadingCtrl.create({
      content: '',
    });
    this.getStateData();
  }

  getStateData() {
    this.http.get('assets/data/states.json').subscribe((res: any) => {
      console.log(res);
      this.states = res;
      this.getAllLabs();
      // console.log(this.states);
    },
      (err) => {
        alert('failed loading json data');
      });
  }

  getAllLabs() {
    this.labsData = [];
    this.apiProvider.getAllLabs().subscribe((response: any) => {
      this.loading.dismiss();
      console.log(response);
      if (response.length > 0) {
        this.labsData = response;
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

  getLabsByState(stateName) {
    console.log(stateName);
    this.labsData = [];
    if (stateName == 'all') {
      this.getAllLabs();
    } else {
      this.apiProvider.getLabsByState(stateName).subscribe((response: any) => {
        this.loading.dismiss();
        console.log(response);
        if (response.length > 0) {
          this.labsData = response;
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
