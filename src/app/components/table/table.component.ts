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

  constructor(private apiService: ApiService) {
    this.getProdutos();
  }

  ngOnInit(): void {
  }


  getProdutos(): void {
    this.apiService.getAll().subscribe((produtos) => (this.produtos = produtos));
  }
}
