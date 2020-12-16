import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnalysisPage } from '../analysis/analysis';
import { SignUpPage } from '../sign-up/sign-up';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm, MaxLengthValidator } from '@angular/forms';
import { ApiProvider } from '../../providers/api/api';
import { SMS } from '@ionic-native/sms';
import { PrecautionsPage } from '../precautions/precautions';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  mobileNo: number;
  pin: number;
  loading: any;

  constructor(public loadingCtrl: LoadingController,private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, private sms: SMS, private apiProvider : ApiProvider,private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
    this.loginForm = this.formBuilder.group({
      mobileNo: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10), this.numberValidator]],
      pin: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(4), this.numberValidator]]
    });
  }

  numberValidator(control: FormControl) {
    let isNotANumber = (/^\d+$/.test(control.value));
    if (control.value && isNotANumber == true) {
      return null;
    } else if (control.value && !isNotANumber) {
      return { 'isNumber': true };
    } else {
      return null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn() {
    console.log(this.loginForm);
    if(this.loginForm.valid) {
      // this.navCtrl.setRoot(HomePage);
      this.loading.present();
      let data = {
        "Mobile_No": this.loginForm.value.mobileNo,
        "UserPin":this.loginForm.value.pin,
        "Device_Token": localStorage.getItem("devicetoken") ? localStorage.getItem("devicetoken") : "874687568765476546",
        "DeviceID": localStorage.getItem("uuid") ? localStorage.getItem("uuid") : "564976897496756974"
      };
      this.apiProvider.signIn(data).subscribe((response: any) => {
        this.loading.dismiss();
        console.log(response);
        let userDetails = {
          'userName' :response['data'].UserName
        };
        localStorage.setItem('userDetail', JSON.stringify(userDetails));
        this.navCtrl.setRoot(HomePage);
      }, (error: any) => {
        this.navCtrl.setRoot(HomePage);
        this.loading.dismiss();
        console.log(error);
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error.message ? error.message : 'Something went wrong,Please try again later!!' ,
          buttons:['Ok']
        });
        alert.present();
      });
    }
  }

  gotoSignup() {
    this.navCtrl.push(SignUpPage);
  }

  sendSms(mobileNo) {
    alert(mobileNo)
    this.sms.send(mobileNo, 'Hello world!').then((data) => {
      console.log(data)
      alert(data)
    }, (err) => {
      console.error(err)
      alert(err)
    });
  }


  gotoAddFam() {
    this.navCtrl.push(HomePage);
  }

}
