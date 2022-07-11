import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/Produtos';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  produtos: Produto[] = [];
  addModalUp: boolean = false;

  constructor(private apiService: ApiService) {
    this.getProdutos();
  }

  ngOnInit(): void {
  }

  //Functions
  handleModalUp() {
    this.addModalUp = true;
  }

  onCloseModal() {
    this.addModalUp = false;
  }

  onEmitProdutosList(Produtos: Produto[]): void {
    this.produtos = Produtos;
  
  }

  getProdutos(): void {
    this.apiService.getAll().subscribe((produtos) => (this.produtos = produtos));
  }
}
