import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Indicador } from '../models/indicador';
import { DatePipe } from '@angular/common';

@Injectable()
export class IndicadorService {

  private urlEndPoint: string = `https://api.cmfchile.cl/api-sbifv3/recursos_api`

  constructor(private http: HttpClient,
    private datePipe: DatePipe) { }

  get(tipo: string): Observable<Indicador> {
    return this.http.get<Indicador>(`${this.urlEndPoint}/${tipo}?apikey=11f89fa835eda51ce8b360c02da6af0de0e56969&formato=json`).pipe(
      map((response: any) => {
        let key = Object.keys(response)[0];
        response = response[key][0];
        response.tipo = key;
        response.key = tipo;
        response.Fecha = this.datePipe.transform(new Date(response.Fecha), 'dd-MM-yyyy');
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
