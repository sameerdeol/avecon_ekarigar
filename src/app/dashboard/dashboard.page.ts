import { Component, OnInit } from '@angular/core';
import { Geolocation, PositionOptions} from '@capacitor/geolocation';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [
    LocationAccuracy, // Add this to the providers array
    // Other providers
  ],
})

export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}
