import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, mergeMap, of, throwError } from 'rxjs';
import { Cliente } from 'src/interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  async registroNuevoCliente(
    nombre: string,
    apellidos: string,
    email: string,
    pass: string
  ) {
    let params = new HttpParams({
      fromObject: {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        pass: pass,
      },
    });

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.http.post<{
      message: string;
      status: string;
      result: any;
      error: any;
    }>(this.url + '/auth/register', params, options);
  }

  async getAllClientes(): Promise<Cliente[]> {
    const data: Response = await fetch(this.url + '/cliente');

    return (await data.json()) ?? [];
  }

  async getClienteById(id: number): Promise<Cliente | undefined> {
    const data: Response = await fetch(this.url + '/cliente/' + id);
    return await data.json();
  }

  async getTokenLogin(email: string, pass: string) {
    let params = new HttpParams({
      fromObject: { email: email, pass: pass },
    });

    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    const response:
      | Observable<{
          message: string;
          status: string;
          result: any;
          error: any;
        }>
      | any = await this.http
      .post<{
        message: string;
        status: string;
        result: any;
        error: any;
      }>(this.url + '/auth/login', params, options)
      .pipe(
        mergeMap((v) => v == null ? throwError('v is null') : of(v)
      ));

    return response;

    // try {

    // }catch(e){
    //   // console.log(e);
    // }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
