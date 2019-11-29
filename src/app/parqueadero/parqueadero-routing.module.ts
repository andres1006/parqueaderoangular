import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  {
    path: '',
    children: [
  {
  path: 'cliente',
  component: ClienteComponent,
  data: {
    title: 'cliente'
  }
},
]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueaderoRoutingModule { }
