import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Indicador } from 'src/app/models/indicador';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  icono: string = 'home';
  titulo: string = "Indicadores";
  indicadores:Indicador[] =[];
  tipos:string[] = ['dolar', 'euro', 'ipc', 'uf', 'utm'];

  constructor(private indicadorService:IndicadorService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tipos.forEach((tipo) => {
      this.indicadorService.get(tipo).subscribe(resp => {
        this.indicadores.push(resp);
      });
    });
    this.ngxService.stop();
  }
}
