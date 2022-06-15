import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-detalle-divisa',
  templateUrl: './detalle-divisa.component.html',
  styleUrls: ['./detalle-divisa.component.css']
})
export class DetalleDivisaComponent implements OnInit {

  icono: string = 'keyboard_arrow_left';
  titulo: string = 'Indicadores';
  data: any;

  // options
  single: any[] = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Fecha';
  showYAxisLabel = true;
  yAxisLabel = 'Valor';
  colorScheme = "vivid";

  constructor(private active: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private _location: Location,
    private detalleDivisa: DetalleService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.active.params.subscribe(params => {
      let key = params['tipo'];
      if (key) {
        this.detalleDivisa.getData(key).subscribe(resp => {
          this.data = resp;
          resp.data.forEach((row: any, index: number) => {
            if(resp.tipo === "IPCs" || resp.tipo === "UTMs"){
              if(index > 1){
                this.single.push({
                  name: moment(row.Fecha).format("DD-MM-YYYY"),
                  value: parseFloat(row.Valor.replace(".", "").replace(",", "."))
                })
              }
            }else{
              if(moment(row.Fecha) <= moment()){
                this.single.push({
                  name: moment(row.Fecha).format("DD-MM-YYYY"),
                  value: parseFloat(row.Valor.replace(".", "").replace(",", "."))
                });
              }
            }
          });
        });
        this.ngxService.stop();
      }
    });
  }

  goBack() {
    this._location.back();
  }

}
