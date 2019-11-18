import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {LoginPageServiceService} from '../login-page/login-page-service.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit{
/* 
    @ViewChild('f', {static: false}) loginForm: NgForm;
 */
    constructor(private loginService: LoginPageServiceService) { }

    ngOnInit() {
    }
  
    autenticar()
    {
      console.log('autenticando');
      //this.loginService.autenticarService('Carloaiza')
      
      
     this.loginService.obtenerObjetos().subscribe(dataFinal => {
       console.log(dataFinal);
       
      },
        error => {
          console.log(error);
          
        }); 
  
    }
    
}
