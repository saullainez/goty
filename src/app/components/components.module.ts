import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [
    NavbarComponent,
    NavbarComponent
  ],
  declarations: [NavbarComponent, GraficoBarraHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
