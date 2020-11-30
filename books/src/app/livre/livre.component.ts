import { LivreApiService } from './../api/livre-api.service';
import { Component, OnInit } from '@angular/core';
import {Livre} from './../models/livre.model'

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styles: [
  ]
})
export class LivreComponent implements OnInit {

  constructor(private api: LivreApiService) { }

  ngOnInit(): void {
    this.getLivre()
  }

  _livres: Livre[] = []

  getLivre(){
    this.api.getLivre()
    .subscribe(
      data =>{this._livres = data}
    )
  }

  selectLivre(livre: Livre){
    console.log('this is' + livre.titre)
  }
}
