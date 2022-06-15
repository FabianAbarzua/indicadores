import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {
  icono: string = 'keyboard_arrow_left';
  titulo: string = 'Indicadores';
  key: string = '';
  data: any;

  constructor(private active: ActivatedRoute,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private _location: Location,
    private divisaService: DivisaService) { }

  async ngOnInit() {
    this.ngxService.start();
     this.active.params.subscribe(params => {
      this.key = params['tipo'];
      if (this.key) {
        this.divisaService.getData(this.key).subscribe(resp => {
          this.data = resp;
          this.ngxService.stop();
        })
      }
    })
  }

  goBack() {
    this._location.back();
  }

}
