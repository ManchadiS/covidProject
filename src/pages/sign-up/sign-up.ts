import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm, MaxLengthValidator } from '@angular/forms';
import { ApiProvider } from '../../providers/api/api'
import { LoginPage } from '../login/login';
import { a } from '@angular/core/src/render3';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage implements OnInit {
  signUpForm : FormGroup;
  userName: string;
  mobileNo: number;
  pin: number;
  loading: any;
  constructor(public loadingCtrl: LoadingController,private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private apiProvider : ApiProvider) {
  }

  ngOnInit() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
    this.signUpForm = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.minLength(4)]],
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
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    console.log(this.signUpForm);
    this.loading.present();
    let data = {
      "Mobile_No": this.signUpForm.value.mobileNo,
      "UserPin":this.signUpForm.value.pin,
      "UserName":this.signUpForm.value.userName,
      "Device_Token": localStorage.getItem("devicetoken") ?localStorage.getItem("devicetoken") : "",
      "DeviceID": localStorage.getItem("uuid")?localStorage.getItem("uuid") : ""
    };
    this.apiProvider.signUp(data).subscribe((response: any) => {
      this.loading.dismiss();
      console.log(response);
      let userDetails = {
        'userName' :response['data'].UserName
      };
      localStorage.setItem('userDetail', JSON.stringify(userDetails));
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'User Created Successfully.' ,
        buttons:['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    }, (error: any) => {
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

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }
}
