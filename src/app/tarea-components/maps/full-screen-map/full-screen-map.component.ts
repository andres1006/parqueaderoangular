import { Component } from '@angular/core';

@Component({
    selector: 'app-full-screen-map',
    templateUrl: './full-screen-map.component.html',
    styleUrls: ['./full-screen-map.component.scss']
})

export class FullScreenMapComponent {
    // Google map lat-long
    lat: number = 5.076752;
    lng: number = -75.519619; 
}