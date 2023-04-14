import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Tema } from 'src/models/Tema';
import { ParteTema } from 'src/models/ParteTema';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  baseUrl: string = "/api";

  public tema!: Tema;

  constructor(private http: HttpClient) { }

  getTemas() {
    return this.http.get<Tema[]>(`${this.baseUrl}/temas`);
  }

  getTema(idTema: number) {
    return this.http.get<Tema>(`${this.baseUrl}/temas/${idTema}`);
  }

  getPartesTema(idTema: number) {
    return this.http.get<ParteTema[]>(`${this.baseUrl}/tema/${idTema}`);
  }

  getParteTema(idParteTema: number) {
    return this.http.get<ParteTema[]>(`${this.baseUrl}/parte-tema/${idParteTema}`);
  }


}
