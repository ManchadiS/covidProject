import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage  } from '../login/login';
import { PrecautionsPage  } from '../precautions/precautions';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the SlideDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-details',
  templateUrl: 'slide-details.html',
})
export class SlideDetailsPage {
  slides = [
    {
      title: "Fight Against Covid-19!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/precautions-01.png",
    },
    {
      title: "How to cure?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/precautions-02.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/precautions-03.png",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideDetailsPage');
  }

  gotoLogin() {
    this.navCtrl.push(SignUpPage);
  }
}
