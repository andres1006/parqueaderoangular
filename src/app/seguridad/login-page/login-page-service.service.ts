import Swal from 'sweetalert2'
import { Injectable } from '@angular/core';
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



export class LoginPageServiceService {
  private urlService: any = environment;
  private token;

  constructor(
    private http: Http,
    public router: Router) { }

  /*   public validateUser(email:String, password:String): Observable<any> { 
      console.log(email +" "+ password);
      return 

    } */

  //Service
public validateUser(email:String, password:String): Observable<any> {
      //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
  const url='https://apiparqueadero2019.herokuapp.com/api/usuario/autenticar';
  console.log("metodo validateUser "+email+" "+ password);

  return this.http.post(url, {email,password},
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
    myHeaders.append('Authorization', 'Bearer');  
    return myHeaders;
  }

 /*  public loginSuccesful(email: string, password: string): Observable<any> {
    return this.http.post(environment.basePath + 'signin'
      , { email, password }, { headers: this.headersREST() })
      .pipe(map(res => {
        return res.json();
      }), pipe(catchError(this.handleError)))
  } */

  /* public cifrarToken(token) {
    token = Buffer.from(token).toString('base64')
    this.token = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(token), CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const reponse = {
      nameToken: 'token',
      cifrado: this.token
    }
    return reponse
  }

  public revelarToken (tokenCifrado) {
    const decrypted = CryptoJS.AES.decrypt(tokenCifrado, CryptoJS.enc.Utf8.parse(this.urlService.keyChiperService), {
      keySize: 256,
      iv: CryptoJS.enc.Utf8.parse(this.urlService.ivChipresService),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    const dataDecrypt = Buffer.from(decrypted.toString(CryptoJS.enc.Utf8), 'base64').toString('ascii');
    const response = {
      nameToken: 'token',
      tokenValid: dataDecrypt
    }
    return response;
  }
 */


/* public estaLogueado() {
    const existToken = sessionStorage.getItem('token');
    if (existToken) {
      const tokenDec = this.cifrarToken(this.token);
      if (!tokenDec) {
        Swal.fire({
          title: 'Cuidado',
          text: 'Tu token ha sido alterado o modificado, Comunicate con el administrador',
          type: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
      return tokenDec;
    }
    return false;
  }  */

 /*  public obtenerObjetos(): Observable<any> {
  //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
   const url='http://localhost:3000/usuarios'

    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {   
        return response.json();
      }), pipe(catchError(this.handleError)))
  } */

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




/*   autenticarService() {
    console.log('Metodo en servicio');
  } */




}
