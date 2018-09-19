import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {configJson, MasterexPage} from "../masterex/masterex";

@Component( {
  selector: 'page-home',
  templateUrl: 'home.html'
} )
export class HomePage {
  public config: configJson = {
    master: {
      headerTitle: "Items",
      titleKey: "title",
      descriptionKey: "description",
      onClick: goToDetail => {
          goToDetail();
      }
    },
    detail: {
      headerTitle: "Detail Item",
      listDetail: {
        title: "Titulo"
      }
    },
    data: [
      {
        title: "Title #1",
        description: "Description #1"
      }
    ]
  };

  constructor( public navCtrl: NavController ) {

  }

  ionViewDidLoad() {
    this.goToMaster();
  }

  goToMaster() {
    console.log(this.config);
    this.navCtrl.push( MasterexPage, {
      config: this.config
    } );
  }

}
