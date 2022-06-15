import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleDivisaComponent } from './components/detalle-divisa/detalle-divisa.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [

  {path: '', component: ListadoComponent},
  {path: 'divisa/:tipo', component: DivisaComponent},
  {path: 'divisa/:tipo/detalle', component: DetalleDivisaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
