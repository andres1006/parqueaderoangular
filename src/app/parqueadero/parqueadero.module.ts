import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ParqueaderoRoutingModule
  ]
})
export class ParqueaderoModule { }
