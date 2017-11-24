import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [FilmeProvider]
})

export class FilmeDetalhesPage {
  public filme;
  public filmeId;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmeProvider: FilmeProvider) {
  }

  ionViewDidEnter() {
    this.filmeId = this.navParams.get("id");
    this.filmeProvider.getFilmeDetalhes(this.filmeId)
      .subscribe(data => {
        console.log(data);
        // let retorno = data['id'];
        this.filme = data;

      }, error => {
        console.log(error);
      })
  }

}
