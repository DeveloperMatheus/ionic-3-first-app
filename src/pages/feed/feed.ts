import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// // importando o provider FilmeProvider
import { FilmeProvider } from '../../providers/filme/filme';

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
  providers: [
    // Injetando o provider FilmeProvider
    FilmeProvider
  ]
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
  // <any> vira um objeto javascript pra eu fazer qualquer coisa
  // public listaFilmes = new Array<any>();
  public listaFilmes = new Array<>();

  /* restringindo o tipo de uma variável */
  public nomeUsuario:string = "Matheus Menezes (código)";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // ato de injetar o FilmeProvider
    private filmeProvider: FilmeProvider
    ) {
  }

  /* função void sem retorno */
  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    // utilizando a injeção com o método getUltimosFilmes() que fiz no filme.ts
    this.filmeProvider.getUltimosFilmes().subscribe(
      data=>{
        console.log(data);
        this.listaFilmes = data.results;

        //Meu JSON não mostra como um Object e não tem header e nem body
        //const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);
        //this.listaFilmes = objeto_retorno.results;
        //console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
  )
  }

}
