import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ],
  declarations: [LoginPageComponent, ForgotPasswordPageComponent, RegisterPageComponent],
  
})
export class SeguridadComponentsModule { }
