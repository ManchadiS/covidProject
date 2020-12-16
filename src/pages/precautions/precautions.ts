import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the PrecautionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-precautions',
  templateUrl: 'precautions.html',
})
export class PrecautionsPage {
  @ViewChild(Slides) slides: Slides;
  imageContainer = [
    { name: 'Step 1', url: "assets/webp/hand-wash-01.webp" },
    { name: 'Step 2', url: "assets/webp/hand-wash-02.webp" },
    { name: 'Step 3', url: "assets/webp/hand-wash-03.webp" },
    { name: 'Step 4', url: "assets/webp/hand-wash-04.webp" },
    { name: 'Step 5', url: "assets/webp/hand-wash-05.webp" },
    { name: 'Step 6', url: "assets/webp/hand-wash-06.webp" },
    { name: 'Step 7', url: "assets/webp/hand-wash-07.webp" },
    { name: 'Step 8', url: "assets/webp/hand-wash-08.webp" }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecautionsPage');
    // this.slides.autoplay = 1000;
    // this.slides.loop = true;
    // this.slides.speed = 500;
  }

  slideChanged() {
    console.log("slide changed.");
    this.slides.startAutoplay();
  }

}
