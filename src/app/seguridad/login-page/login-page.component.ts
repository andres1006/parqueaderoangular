import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';
import {LoginPageServiceService} from '../login-page/login-page-service.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit{

    @ViewChild('f', {static: false}) loginForm: NgForm;

    public loading = false;
    public request;
       

    constructor(private router: Router,
      private loginService: LoginPageServiceService,
      private route: ActivatedRoute) { }

    ngOnInit() {
    }
  
    public login(userLogin: NgForm) {
      console.log("click login");
      this.loading = true;
      const formLogin = {
        email: userLogin.form.value.email,
        password: userLogin.form.value.password
      }
      this.loginService.validateUser(formLogin.email, formLogin.password).subscribe(dataFinal => {
        console.log("token  "+ dataFinal.token.access_token);
        this.loading = true;
        /* if (dataFinal.token) {
          sessionStorage.setItem(dataFinal.token.access_token , dataFinal.token.access_token)
         const tokenCifrado = this.loginService.cifrarToken(dataFinal.token)
         */
        if (dataFinal.token.access_token) {
          const tokenCifrado = this.loginService.cifrarToken(dataFinal.token.access_token)
          sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
  
         
        //this.router.navigate(['/components/video'])
        this.router.navigate(['full-layout']);
        
        this.loading = false;
        } 
      },
        error => {
          if (error.Errors.message.includes('email') || error.Errors.message.includes('invalid_database')) {
            this.loading = true;
            Swal.fire({
              title: 'Algo ha fallado',
              text: 'Tu usuario/contraseña es incorrecto',
              type: 'warning',
              confirmButtonText: 'Quiero volverlo a intentar'
            })
          } else {
            Swal.fire({
              title: 'Hemos tenido un error!',
              text: error.Errors.message,
              type: 'error',
              confirmButtonText: 'Aceptar'
            })
          }
          this.loading = false;
        })
      this.loading = false;
    }


    


  /*   public eje(userLogin: NgForm){
      const formLogin = {
        email: userLogin.form.value.email,
        password: userLogin.form.value.password
      }
     this.loginService.validateUser(formLogin.email, formLogin.password);
        } */


  }
  
    

