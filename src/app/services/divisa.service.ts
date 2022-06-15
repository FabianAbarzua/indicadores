import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DivisaService {

  private urlEndPoint: string = `https://api.cmfchile.cl/api-sbifv3/recursos_api`;
  private data: any;

  constructor(private http: HttpClient) { }

  getData(tipo: string): Observable<any> {
    switch(tipo){
      case 'dolar': case 'euro': case 'uf':
        const rango = moment().add('-30', 'days');
        const anio = rango.year();
        const mes = rango.format('MM');
        const dia = rango.format('DD');
        this.data = this.http.get<any>(`${this.urlEndPoint}/${tipo}/posteriores/${anio}/${mes}/dias/${dia}?apikey=11f89fa835eda51ce8b360c02da6af0de0e56969&formato=json`);
        break;
      case 'ipc': case 'utm':
        const anio_actual = moment().year();
        this.data = this.http.get<any>(`${this.urlEndPoint}/${tipo}/${anio_actual}?apikey=11f89fa835eda51ce8b360c02da6af0de0e56969&formato=json`);
        break;
    }

    return this.data.pipe(
      map((response: any) => {
        let key = Object.keys(response)[0];
        response.data = response[key];
        response.tipo = key;
        return response;
      }),
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    )
  }
}
