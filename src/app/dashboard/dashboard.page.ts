import { Component, OnInit } from '@angular/core';
import { Geolocation, PositionOptions} from '@capacitor/geolocation';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';
import { NativeGeocoder } from '@capgo/nativegeocoder';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [
    LocationAccuracy,
     // Add this to the providers array
    // Other providers
  ],
})

export class DashboardPage implements OnInit {
  intervalId: any;

  constructor(private http : HttpClient ) { }
  locationName: string = '';
  ngOnInit() {
    // this. startAutoFetch();
    this.getCurrentLocation();
  }
   async getCurrentLocation(){
    try {
      const position = await Geolocation.getCurrentPosition();  // Get coordinates
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      this.reverseGeocode(lat, lon); // Convert coordinates to address
    } catch (e) {
      console.log('Error getting location', e);  // Handle error
    }
}
reverseGeocode(lat: number, lon: number) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

  // Make HTTP GET request to get location name
  this.http.get(url).subscribe((result: any) => {
    this.locationName = result.display_name;  // Set the location name
    console.log('Location name:', this.locationName);
  }, (error: any) => {
    console.log('Reverse geocoding error:', error);  // Handle error
  });
}
// startAutoFetch() {
//   this.intervalId = setInterval(() => {
//     this.getCurrentLocation();
//   }, 5000);  // 5000ms = 5 seconds
// }
}
