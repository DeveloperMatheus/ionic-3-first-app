import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //Meu objeto em JSON que vai ser consumido na página de feed
  public objeto_feed = {
    titulo: "Um título de feed",
    data: "5 de Novembro, 1955",
    descricao: "Estou criando um app aqui usando JSON",
    qntdLikes: 12,
    qntdComentarios: 4,
    tempoComentario: "11h atrás"
  }

  /* restringindo o tipo de uma variável */
  public nomeUsuario:string = "Matheus Menezes (código)";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* função void sem retorno */
  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
