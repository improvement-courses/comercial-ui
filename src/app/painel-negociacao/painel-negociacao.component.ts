import { OportunidadeService } from './../oportunidade.service';
import { Component, OnInit } from '@angular/core';

import { MessageService } from "primeng/api";

@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [];

  constructor(
    private oportunidaeService: OportunidadeService, 
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consulta();
  }

  consulta() {
    this.oportunidaeService.lista()
      .subscribe(response => this.oportunidades = <any> response)
  }

  adiciona() {
    this.oportunidaeService.adiciona(this.oportunidade)
      .subscribe(() => {
        this.oportunidade = {};
        this.consulta();

        this.messageService.add({
          severity: "Success",
          summary: "Oportunidade adicionada com sucesso!"
        });
      }, 
      response => {
        let msg = 'Erro inesperado, tente novamente';

        if (response.error.message) {
          msg = response.error.message;
        }

        this.messageService.add({
          severity: 'Error',
          summary: msg
        });
      });
  }
}
