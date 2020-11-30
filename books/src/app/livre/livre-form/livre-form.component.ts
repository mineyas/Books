import { LivreApiService } from './../../api/livre-api.service';
import { Component, OnInit } from '@angular/core';
import {Livre} from "src/app/models/livre.model"
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styles: [
  ]
})
export class LivreFormComponent implements OnInit {

  livre: Livre = new Livre(0, "Livre Name", "Auteur Name", 0);

  constructor(
    private livreService: LivreApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.livreService.createLivre(this.livre).subscribe(
      data =>{
        return true
      }
    )
    alert('Livre updated!!' + JSON.stringify(this.livre, null, 4))
  }

  goBack(): void{
    this.router.navigate(['/livre'])
  }

}
