import { Component, OnInit } from '@angular/core';
import { CriapersonaI } from '../model/criapersona.interface';
import { CriapersonasService } from '../services/criapersona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criapersona',
  templateUrl: './criapersona.page.html',
  styleUrls: ['./criapersona.page.scss'],
})
export class CriapersonaPage implements OnInit {

  criapersona: CriapersonaI = {
    nome: '',
    classe: '',
    raca: '',
    sexo: '',
    altura: '',
    peso: '',
    idade: '',
    forca: '',
    habilidade: '',
    resistencia: '',
    defesa: '',
    poderfogo: ''
    }
  criapersonaId = null;

  constructor(
    private route: ActivatedRoute,
    private criapersonaService:CriapersonasService, 
    private router: Router) { }

  ngOnInit() {
    this.criapersonaId = this.route.snapshot.params['id'];
    if (this.criapersonaId) {
      this.criapersonaService.getCriapersona(this.criapersonaId).subscribe(res => {
        this.criapersona = res;
      })
    }
  }

  add() {
    if(this.criapersonaId) {      
      this.criapersonaService.update(this.criapersona, this.criapersonaId);      
    }
    else {
      this.criapersonaService.addCriapersona(this.criapersona);
    }
    this.router.navigate(['/telajogador']);
  }

  remove() {
    this.router.navigate(['/telajogador']);
    this.criapersonaService.remove(this.criapersonaId);
  }

}
