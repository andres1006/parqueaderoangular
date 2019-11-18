import Swal from 'sweetalert2'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

/*   //Service
public validarUser(dataLogin): Observable<any> {
  //const url = ''
  const url='http://localhost:8080/api/objeto';
  
  return this.http.get(url, 
    {
      headers: this.headersREST()}).pipe(
        map(response => {
          return response.json();
        }), pipe(catchError(this.handleError)))
} */


  private headersREST(): Headers {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*' );
    
    return myHeaders;
  }

/*   public loginSuccesful(email: string, password: string): Observable<any> {
    return this.http.post(environment.basePath + 'signin'
      , { email, password }, { headers: this.headersREST() })
      .pipe(map(res => {
        return res.json();
      }), pipe(catchError(this.handleError)))
  }

  public cifrarToken(token) {
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


  


public estaLogueado() {
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

  public obtenerObjetos(): Observable<any> {
    //const url = `${this.urlService.loginValidateUser}${dataLogin.userName}&password=${dataLogin.password}&db=${this.urlService.database}`;
   const url='http://localhost:8080/api/objeto'

    return this.http.get(url,
     { headers: this.headersREST() }).pipe(
      map(response => {   
        return response.json();
      }), pipe(catchError(this.handleError)))
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




/*   autenticarService(data: string) {
    console.log('Metodo en servicio' + data);
  } */




}
