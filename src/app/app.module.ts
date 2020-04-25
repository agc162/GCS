import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private toastCtrl: ToastController
  ) {
    this.presentToast();
  }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      header: 'HeartStoneApp',
      position: 'middle',
      color: 'medium',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: '  Welcome!!'
        }, {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Closed');
          }
        }
      ]
    });
    toast.present();
  }
}
