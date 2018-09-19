import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {configJson} from "../masterex/masterex";

/**
 * Generated class for the DetailexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailex',
  templateUrl: 'detailex.html',
})
export class DetailexPage {
  private config: configJson;
  private item: object;
  public show: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.config = this.navParams.get( "config" );
    this.item = this.navParams.get("item");
  }
}
