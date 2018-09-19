import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterexPage } from './masterex';
import {DetailexPageModule} from "../detailex/detailex.module";

@NgModule({
  declarations: [
    MasterexPage,
  ],
  imports: [
    DetailexPageModule,
    IonicPageModule.forChild(MasterexPage),
  ],
})
export class MasterexPageModule {}
