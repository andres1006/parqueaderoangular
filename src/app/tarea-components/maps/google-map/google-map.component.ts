import { Component } from '@angular/core';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
})

export class GoogleMapComponent {
  // Google map lat-long
  lat: number = 5.076752;
  lng: number = -75.519619;
}