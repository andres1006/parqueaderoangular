import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const routes: Routes = [
  { 
  path: 'login',
  component: LoginPageComponent,
  data: {
    title: 'Login'
  }
},
{ 
  path: 'forgot',
  component: ForgotPasswordPageComponent,
  data: {
    title: 'Forgot Pasword'
  }
},
{ 
  path: 'register',
  component: RegisterPageComponent,
  data: {
    title: 'Forgot Pasword'
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
