import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../services/temas.service';
import { Tema } from 'src/models/Tema';
import { ParteTema } from 'src/models/ParteTema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  //Objeto para que no aparezcan errores
  temaComodin: Tema = new Tema(1,"","");

  temas!: Tema[];
  partes!: ParteTema[];
  temaActive: Tema = this.temaComodin;

  idTema: number = 2;

  constructor(
    private temasService: TemasService
  ) {
    this.temasService.getTemas().subscribe((resp: Tema[]) => {
      this.temas = resp;
      this.temaActive = this.temas[0];
    });
    this.temasService.getPartesTema(3).subscribe((resp: ParteTema[]) => {
      this.partes = resp;  
    });

  }

  ngOnInit(): void {
  }

  mostrar(tema: Tema){
    this.temaActive = tema;
    this.temasService.tema = tema;
    this.temasService.getPartesTema(tema.id_tema).subscribe((resp: ParteTema[]) => {
      this.partes = resp;  
    });
  }



}
