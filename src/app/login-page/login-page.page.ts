import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Capacitor } from '@capacitor/core';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
  providers: [
    LocationAccuracy,
  ],
})
export class LoginPagePage implements OnInit {
  loading = true;

  constructor(private locationAccuracy: LocationAccuracy, private router: Router) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }


  async getCurrentLocation() {
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      console.log('Permission status: ', permissionStatus.location);
      if(permissionStatus?.location != 'granted') {
        const requestStatus = await Geolocation.requestPermissions();
        if(requestStatus.location != 'granted') {
          // go to location settings
          await this.openSettings(true);
          return;
        }
      }

      if(Capacitor.getPlatform() == 'android') {
        this.enableGps();
      }

      let options: PositionOptions = {
        maximumAge: 3000,
        timeout: 10000,
        enableHighAccuracy: true
      };
      const position = await Geolocation.getCurrentPosition(options);
      console.log(position);
    } catch(e: any) {
      if(e?.message == 'Location services are not enabled') {
        await this.openSettings();
      }
      console.log(e);
    }
  }

  openSettings(app = false) {
    console.log('open settings...');
    return NativeSettings.open({
      optionAndroid: app ? AndroidSettings.ApplicationDetails : AndroidSettings.Location, 
      optionIOS: app ? IOSSettings.App : IOSSettings.LocationServices
    });
  }

  async enableGps() {
    const canRequest = await this.locationAccuracy.canRequest();
    if(canRequest) {
      await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
    }
  }
}
