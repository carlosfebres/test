import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailexPage } from './detailex';
import {PipesModule} from "../../pipes/pipes.module";
import {BusquedaComplexPageModule} from "../busqueda-complex/busqueda-complex.module";

@NgModule({
  declarations: [
    DetailexPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailexPage),
    PipesModule,
    BusquedaComplexPageModule
  ],
})
export class DetailexPageModule {}
