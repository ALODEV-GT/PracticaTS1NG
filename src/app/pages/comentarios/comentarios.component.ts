import { Component } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from 'src/models/Comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

  comentarios: Comentario[] = [];

  comentario: string = "";

  constructor(
    private comentarioService: ComentarioService,
  ) {
    this.listarComentarios();
  }

  listarComentarios() {
    this.comentarioService.getComentarios().subscribe((resp: Comentario[]) => {
      this.comentarios = resp;
    });
  }

  comentar() {
    let comentario: Comentario = new Comentario(0, "baaq", this.comentario);

    this.comentarioService.comentar(comentario).subscribe((resp) => {
      this.comentario = "";
      this.listarComentarios();
    });
  }

}
