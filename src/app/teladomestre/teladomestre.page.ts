import { Component, OnInit } from '@angular/core';
import { CriapersonaI } from '../model/criapersona.interface';
import { CriapersonasService } from '../services/criapersona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-teladomestre',
  templateUrl: './teladomestre.page.html',
  styleUrls: ['./teladomestre.page.scss'],
})
export class TeladomestrePage implements OnInit {

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
    private router: Router,
    private authService:AuthServiceService) { }

  ngOnInit() {
    this.criapersonaId = this.route.snapshot.params['id'];
    if (this.criapersonaId) {
      this.criapersonaService.getCriapersona(this.criapersonaId).subscribe(res => {
        this.criapersona = res;
      })
    }
  }

}
