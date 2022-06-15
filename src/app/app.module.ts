import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { NgxUiLoaderModule } from "ngx-ui-loader";
import { IndicadorService } from './services/indicador.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DivisaComponent } from './components/divisa/divisa.component';
import { DivisaService } from './services/divisa.service';
import { DetalleDivisaComponent } from './components/detalle-divisa/detalle-divisa.component';
import { DetalleService } from './services/detalle.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoComponent,
    DivisaComponent,
    DetalleDivisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    NgxChartsModule
  ],
  providers: [IndicadorService, DivisaService, DetalleService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
