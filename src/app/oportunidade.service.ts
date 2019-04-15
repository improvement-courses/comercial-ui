import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades';

  constructor(private httpClient: HttpClient) { }

  lista() {
    return this.httpClient.get(this.apiUrl);
  }

  adiciona(oportunidade: any) {
    return this.httpClient.post(this.apiUrl, oportunidade);
  }
}
