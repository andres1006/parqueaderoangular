import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Buffer } from 'buffer';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http: Http,
    public router: Router) { }

    //Service
public consultarClientes(): Observable<any> {
  //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
  const url='https://apiparqueadero2019.herokuapp.com/api/cliente';
  console.log("cliente token  "+ this.estasLogueado());
return this.http.get(url, 
{
  headers: this.headersREST()}).pipe(
    map(res => {
      console.log("metodo res "+res);
      return res.json();
    }), pipe(catchError(this.handleError)))
}

public estasLogueado(){
  return (sessionStorage.getItem('token'))? true : false;
}


private headersREST(): Headers {
  const myHeaders = new Headers();
  console.log("metodo headers " + myHeaders);
  //const tokenValid = this.revelarToken(sessionStorage.getItem('token'));
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer '+ sessionStorage.getItem('token'));  
  return myHeaders;
}

  // Erros
  private handleError(error: Response) {
    const setError = (error['_body']) ? JSON.parse(error['_body']) : error.statusText;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return Observable.throw(json);
  }


}
