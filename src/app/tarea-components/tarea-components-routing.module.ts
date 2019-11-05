import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { PlayerComponent } from './player/player.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapsComponent } from "./maps/maps.component";

/**import { CarouselComponent } from './bootstrap/carousel/carousel.component';*/



const routes: Routes = [
    {
      path: '',
      children: [
    {
    path: 'editor',
    component: EditorComponent,
    data: {
      title: 'Editor'
    }
  },
  {
    path: 'player',
    component: PlayerComponent,
    data: {
      title: 'Player'
    }
  }, 
  
  {
    path: 'carousel',
    component: CarouselComponent,
    data: {
      title: 'Carousel'
    }
  }, 
  
  {
    path: 'maps',
    component: MapsComponent,
    data: {
      title: 'Maps'
    }
  }, 
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareaComponentsRoutingModule { }
