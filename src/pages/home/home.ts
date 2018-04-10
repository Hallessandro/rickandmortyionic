import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Personagem } from '../../_dominio/personagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personagens: Personagem[] = [];
  constructor(public navCtrl: NavController, private _http: HttpClient) {}

  ionViewDidLoad(){
    this.getPersonagens();
  }

  getPersonagens(){
    this._http.get<Personagem[]>("https://rickandmortyapi.com/api/character/")
      .subscribe((retorno) => {
        if(retorno){
          this.personagens = retorno.results;
        }else {
          this.personagens = [];
        }
      }, error => {
        console.error(error);
      });
  }
}
