import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';



@NgModule({
  exports: [
    NavbarComponent,
    NavbarComponent
  ],
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
