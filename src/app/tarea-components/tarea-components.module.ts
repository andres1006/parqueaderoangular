import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TareaComponentsRoutingModule } from './tarea-components-routing.module';
import { EditorComponent } from './editor/editor.component';
import { QuillModule } from 'ngx-quill';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';


import { PlayerComponent } from './player/player.component';
import { CarouselComponent } from './carousel/carousel.component';

import { MapsComponent } from './maps/maps.component';
import { FullScreenMapComponent } from './maps/full-screen-map/full-screen-map.component';
import { GoogleMapComponent } from './maps/google-map/google-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
//import { ChartsComponent } from './charts/charts.component';


/**import { CarouselComponent } from './bootstrap/carousel/carousel.component';*/





@NgModule({
  declarations: [EditorComponent, PlayerComponent, CarouselComponent, MapsComponent, FullScreenMapComponent, GoogleMapComponent],
  imports: [
    CommonModule,NgbModule,
    TareaComponentsRoutingModule, QuillModule, FormsModule, ReactiveFormsModule, VgCoreModule, VgControlsModule,
    VgOverlayPlayModule, VgBufferingModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjHpeZ0A1qF0JmaMPHOiGrhjpkRSMC1zA'
  })
  ]
})
export class TareaComponentsModule { }
