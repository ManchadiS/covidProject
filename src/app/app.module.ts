import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { AnalysisPage } from '../pages/analysis/analysis';
import { FamilyInfoPage  } from '../pages/family-info/family-info';
import { AddFamilyPage  } from '../pages/add-family/add-family';
import { SlideDetailsPage  } from '../pages/slide-details/slide-details';
import { PrecautionsPage  } from '../pages/precautions/precautions';
import { ReportPage  } from '../pages/report/report';
import { LabInfoPage  } from '../pages/lab-info/lab-info';
import { SelfAssessmentPage  } from '../pages/self-assessment/self-assessment';
import { HelplinesPage  } from '../pages/helplines/helplines';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';
import { ExternalProvider } from '../providers/external/external';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AnalysisPage,
    FamilyInfoPage,
    AddFamilyPage,
    SlideDetailsPage,
    ReportPage,
    LabInfoPage,
    SelfAssessmentPage,
    PrecautionsPage,
    HelplinesPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AnalysisPage,
    FamilyInfoPage,
    AddFamilyPage,
    SlideDetailsPage,
    ReportPage,
    LabInfoPage,
    SelfAssessmentPage,
    PrecautionsPage,
    HelplinesPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    AppVersion,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExternalProvider,
    ApiProvider
  ]
})
export class AppModule {}
