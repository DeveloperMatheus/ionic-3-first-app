import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// // importando o provider FilmeProvider
import { FilmeProvider } from '../../providers/filme/filme';
import { LoadingController } from 'ionic-angular';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public page = 1;

  /* restringindo o tipo de uma variável */
  public feedTitulo:string = "Filmes populares";
  public loader;
  public refresher;
  public isAtualiza:boolean = false;
  public infiniteScroll;

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

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isAtualiza = true;
    this.carregaFilmes();
  }

    //ionViewDidLoad() {
    /* Vai virar ionViewDidEnter() pra mostrar meu loader sempre que
    eu entrar na página de feed. o DidLoad é quando a página é carregada. Ou seja,
    apenas uma única vez. */
    ionViewDidEnter() {
      this.carregaFilmes();
    }

    abrirDetalhes(filme) {
      console.log(filme.id);
      this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
    }

    carregaFilmes(newpage: boolean = false) {
      // Chamando minha função do loader.
      this.abreLoader();
    // utilizando a injeção com o método getUltimosFilmes() que fiz no filme.ts
      this.filmeProvider.getUltimosFilmes(this.page).subscribe(
        data=>{
        console.log(data);
        this.listaFilmes = data['results'];
        // Quando terminar de carregar o loader precisa ser fechado!
        this.fechaLoader();

        if (newpage) {
          this.listaFilmes.concat(data['results']);
          this.infiniteScroll.complete();
        } else {
          this.listaFilmes = data['results'];
        }

        if(this.isAtualiza) {
          this.refresher.complete();
          this.isAtualiza = false;
        }
      }, error => {
        console.log(error);
        this.fechaLoader();
        if(this.isAtualiza) {
          this.refresher.complete();
          this.isAtualiza = false;
        }
      }
    )
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregaFilmes(true);
    infiniteScroll.complete();
  }

 }
