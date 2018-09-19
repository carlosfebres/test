import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DetailexPage} from "../detailex/detailex";


@IonicPage()
@Component( {
  selector: 'page-masterex',
  templateUrl: 'masterex.html',
} )
export class MasterexPage {

  public config: configJson;

  constructor( public navCtrl: NavController, public navParams: NavParams ) {
    this.config = this.navParams.get( "config" );
  }

  click(item) {
    // If the promise is resolve, goToDetail will be executed
    (new Promise( resolve => {
      this.config.master.onClick.call(this,resolve,item);
    } )).then( () => this.goToDetail(item) );

  }

  goToDetail(item) {
    console.log( this.config );
    console.log("Go To Detail", item);
    this.navCtrl.push( DetailexPage, {
      item: item,
      config: this.config
    } );
  }

}

export type configJson = {
  master: {
    headerTitle: string,
    onClick: any,
    titleKey: string,
    descriptionKey: string,
  },
  detail: {
    headerTitle: string,
    listDetail: object
  },
  data: Array<object>

}
