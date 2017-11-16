import { Injectable } from '@angular/core';

let configChaveNome = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    mostraSlide: false,
    nome: "",
    usuario: ""
  }

  constructor() {

  }

  // método criado por mim: recupera dados do local store
  getConfigData(): any {
    return localStorage.getItem(configChaveNome);
  }
  // método criado por mim: grava dados no local store
  // o ? no parâmetro significa pra tornar opicional o preenchimento do atributo do objeto.
  setConfigData(mostraSlide?: boolean, nome?: string, usuario?: string) {
    let config = {
      mostraSlide: false,
      nome: "",
      usuario: ""
    };

    if(mostraSlide) {
      config.mostraSlide = mostraSlide;
    }

    if(nome) {
      config.nome = nome;
    }

    if(usuario) {
      config.usuario = usuario;
    }

    localStorage.setItem(configChaveNome, JSON.stringify(config));
  }
}
