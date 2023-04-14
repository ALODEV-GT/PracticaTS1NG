import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comentario } from 'src/models/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  baseUrl: string = "/api";

  constructor(private http: HttpClient) { }

  getComentarios() {
    return this.http.get<Comentario[]>(`${this.baseUrl}/comentarios`);
  }

  comentar(comentario: Comentario) {
    return this.http.post<any>(`${this.baseUrl}/comentar`, comentario);
  }
}
