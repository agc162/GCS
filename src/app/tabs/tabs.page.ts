import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public alertController: AlertController,
    public platform: Platform,
    ) { this.platform = platform; }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to go out??',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.closed();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  public closed() {
    this.platform.backButton.subscribe(() => {
     console.log ('exit');
     navigator['app'].exitApp();
 });
}
}
