import {Component} from '@angular/core';
import {Push} from "ionic-native";
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {
  constructor(private navController: NavController) {

  }
  initPush() {
    let push = Push.init({
      android: {
        senderID: '1062574085193'
      },
      ios: {
        alert: "true",
        badge: true,
        sound: 'false'
      },
      windows: {}
    });

    push.on('registration', (data) => {
      console.log('id --> notificaciones push ->>', data.registrationId);
    });

    push.on('notification', (data: NotificationEventResponse) => {
      console.log(data.message);
      console.log(data.title);

      //console.log(data.additionalData.card.sections);
      //console.log(data.additionalData.card.sections[0].title);

      //this.conceptService.insertNewCard(data.additionalData.card).subscribe(res => {
      //console.log('this.nav ->', this.nav)

      //this.nav.push(CardDetail, { item: data.additionalData.card })
      //})
    });

    push.on('error', (e) => {
      console.log(e.message);
    });
  }
}

export interface NotificationEventResponse {
    /**
     * The text of the push message sent from the 3rd party service.
     */
    message: string;
    /**
     * The optional title of the push message sent from the 3rd party service.
     */
    title?: string;
    /**
     * The number of messages to be displayed in the badge iOS or message count in the notification shade in Android.
     * For windows, it represents the value in the badge notification which could be a number or a status glyph.
     */
    count: string;
    /**
     * The name of the sound file to be played upon receipt of the notification.
     */
    sound: string;
    /**
     * The path of the image file to be displayed in the notification.
     */
    image: string;
    /**
     * An optional collection of data sent by the 3rd party push service that does not fit in the above properties.
     */
    additionalData: NotificationEventAdditionalData;
}


export interface NotificationEventAdditionalData {
    [name: string]: any;
    /**
     * Whether the notification was received while the app was in the foreground
     */
    foreground?: boolean;
    collapse_key?: string;
    from?: string;
    notId?: string;
    card?: any;
}

