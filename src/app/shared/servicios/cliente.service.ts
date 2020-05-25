import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: Cliente[] = []
  urlEndPoint: string = 'https://oechsle-33517.firebaseio.com/clientes.json';
  
  constructor(private http: HttpClient) { }

  postCliente(data: Cliente): Observable<Cliente>{
    let body = JSON.stringify(data)
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
      
    })

    console.log('Entro el servicio  : ', body);
    return this.http.post<Cliente>(this.urlEndPoint, body, {headers})
    .pipe(catchError(err => {
      console.log('ERROR',err)
      return throwError(err);
    }));
  }

  getClientes():Observable<Cliente>{
    return this.http.get<Cliente>(this.urlEndPoint)
    .pipe<Cliente>(map(r =>{
      for(var i in r) {
        this.cliente.push(r[i])
      }
      console.log('CLIENTON ', this.cliente)
      return this.cliente      
    }))
    .pipe(catchError(err => {
      console.log('ERROR',err)
      return throwError(err);
    }));
  }

}
