import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ],
  declarations: [LoginPageComponent],
  
})
export class SeguridadComponentsModule { }
