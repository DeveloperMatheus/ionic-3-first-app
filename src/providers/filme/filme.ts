import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {

  //Pra não reusar código eu fiz isso
  private caminhoApiBase = 'https://api.themoviedb.org/3';

  constructor(public http: HttpClient) {
    console.log('Oi FilmeProvider Provider');
  }

  // Método criado por mim pra pegar dados. Depois vou fazer algo com isso
  getUltimosFilmes() {
    // /movie/popular é um diretório do site da documentação do api.
    //Coloque sua key no #.
    return this.http.get(this.caminhoApiBase + '/movie/popular?api_key=43c484a6d1f19b99959336bf0dd178d9');
  }

  getFilmeDetalhes(filmeId) {
    // /movie/popular é um diretório do site da documentação do api.
    //Coloque sua key no #.
    return this.http.get(this.caminhoApiBase + '/movie/'+ filmeId + '?api_key=43c484a6d1f19b99959336bf0dd178d9');
  }

}
