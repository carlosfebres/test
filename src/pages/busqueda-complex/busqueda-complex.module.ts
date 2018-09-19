import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaComplexPage } from './busqueda-complex';

@NgModule({
  declarations: [
    BusquedaComplexPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaComplexPage),
  ],
  exports: [
    BusquedaComplexPage
  ]
})
export class BusquedaComplexPageModule {}
