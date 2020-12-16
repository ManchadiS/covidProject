import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PrecautionsPage } from '../pages/precautions/precautions';
import { AnalysisPage } from '../pages/analysis/analysis';
import { LabInfoPage } from '../pages/lab-info/lab-info';
import { SelfAssessmentPage } from '../pages/self-assessment/self-assessment';
import { LoginPage } from '../pages/login/login';
import { SlideDetailsPage } from '../pages/slide-details/slide-details';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { HelplinesPage } from '../pages/helplines/helplines';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  appVersionNo: any;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public device: Device, public splashScreen: SplashScreen, private appVersion: AppVersion) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'Start a digital checkup', component: SelfAssessmentPage, icon: 'medkit' },
      { title: 'COVID-19 awareness', component: PrecautionsPage, icon: 'hand' },
      { title: 'Laboratory nearby', component: LabInfoPage, icon: 'flask' },
      { title: 'Helpline contacts', component: HelplinesPage, icon: 'call' },
      { title: 'News updates', component: AnalysisPage, icon: 'volume-mute' },
      { title: 'Government updates', component: AnalysisPage, icon: 'card' },
      { title: 'Settings', component: PrecautionsPage, icon: 'settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.appVersion.getVersionNumber().then(version => {
      //   console.log(version);
      //   this.appVersionNo = version;
      // });

      // console.log(this.appVersion.getVersionNumber())
      // console.log(this.appVersion)

      localStorage.setItem('uuid', this.device.uuid);
      console.log(localStorage.getItem('userDetail'))

      if (localStorage.getItem('userDetail')) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = SlideDetailsPage;
        localStorage.clear();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}
