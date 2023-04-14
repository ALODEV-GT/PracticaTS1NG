import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemasService } from '../../services/temas.service';
import { ParteTema } from 'src/models/ParteTema';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private temasService: TemasService
  ) { }

  //Objetivo para que no aparezcan errores
  parteComodin: ParteTema = new ParteTema(0,0,"","");

  parte: ParteTema = this.parteComodin;

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.temasService.getParteTema(id))
      )
      .subscribe((resp: ParteTema[]) => {
        this.parte = resp[0];
      }
      );
  }
}
