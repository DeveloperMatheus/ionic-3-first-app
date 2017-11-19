import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// // importando o provider FilmeProvider
import { FilmeProvider } from '../../providers/filme/filme';
import { LoadingController } from 'ionic-angular';

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
  public listaFilmes = new Array<any>();

  /* restringindo o tipo de uma variável */
  public feedTitulo:string = "Filmes populares";
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // ato de injetar o FilmeProvider
    private filmeProvider: FilmeProvider,
    public loadingCtrl: LoadingController
    ) {
  }

  abreLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaLoader() {
    this.loader.dismiss();
  }

  /* função void sem retorno */
  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

    //ionViewDidLoad() {
    /* Vai virar ionViewDidEnter() pra mostrar meu loader sempre que
    eu entrar na página de feed. o DidLoad é quando a página é carregada. Ou seja,
    apenas uma única vez. */
    ionViewDidEnter() {
      // Chamando minha função do loader.
      this.abreLoader();
    // utilizando a injeção com o método getUltimosFilmes() que fiz no filme.ts
      this.filmeProvider.getUltimosFilmes().subscribe(
        data=>{
        console.log(data);
        this.listaFilmes = data['results'];
        // Quando terminar de carregar o loader precisa ser fechado!
        this.fechaLoader();
      }, error => {
        console.log(error);
        this.fechaLoader();
      }
  )
  }

}
