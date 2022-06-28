import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

import { Produto } from 'src/app/Produtos';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  @Input() produto!: Produto;
  @Input() produtos!: Produto[];
  showModal = false;


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  handleShowModal(): void {
    this.showModal = !this.showModal;
  }

  handleDelete(id: number): void {
    this.produtos = this.produtos.filter((produto) => this.produto.id !== produto.id);
    this.apiService.deleteOne(id).subscribe();
  }

}
