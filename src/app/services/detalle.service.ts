import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class DetalleService {

  private urlEndPoint: string = `https://api.cmfchile.cl/api-sbifv3/recursos_api`
  private data: any;
  private rango: any;
  private anio: string = '';
  private mes: string = '';

  constructor(private http: HttpClient) { }

  getData(tipo: string): Observable<any> {
    switch(tipo){
      case 'dolar': case 'euro': case 'uf':
        this.rango = moment().add('-11', 'days');
        this.anio = this.rango.year();
        this.mes = this.rango.format('MM');
        const dia = this.rango.format('DD');
        this.data = this.http.get<any>(`${this.urlEndPoint}/${tipo}/posteriores/${this.anio}/${this.mes}/dias/${dia}?apikey=11f89fa835eda51ce8b360c02da6af0de0e56969&formato=json`);
        break;
      case 'ipc': case 'utm':
        this.rango = moment().add('-1', 'years');
        this.anio = this.rango.year();
        this.mes = this.rango.format('MM');
        this.data = this.http.get<any>(`${this.urlEndPoint}/${tipo}/posteriores/${this.anio}/${this.mes}?apikey=11f89fa835eda51ce8b360c02da6af0de0e56969&formato=json`);
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
