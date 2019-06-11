import { Component, OnInit } from '@angular/core';
import { SalaI } from '../model/sala.interface';
import { SalaSService } from '../services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criasala',
  templateUrl: './criasala.page.html',
  styleUrls: ['./criasala.page.scss'],
})
export class CriasalaPage implements OnInit {

  sala: SalaI = {
    nome: '',
    jogadores: '',
    tema: ''
  }
  salaId = null;

  constructor(
    private route: ActivatedRoute,
    private salaService:SalaSService, 
    private router: Router) { }

  ngOnInit() {
    this.salaId = this.route.snapshot.params['id'];
    if (this.salaId) {
      this.salaService.getSala(this.salaId).subscribe(res => {
        this.sala = res;
      })
    }
  }

  add() {
    if(this.salaId) {      
      this.salaService.update(this.sala, this.salaId);      
    }
    else {
      this.salaService.addSala(this.sala);
    }
    this.router.navigate(['/teladomestre']);
  }

}
