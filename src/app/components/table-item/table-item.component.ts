import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() EmitProdutosList: EventEmitter<any> = new EventEmitter<{
    produtos: Produto[]
  }>();

  showModal = false;


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  handleShowModal(): void {
    this.showModal = !this.showModal;
  }

  handleDelete(id: number): void {
    this.apiService.deleteOne(id).subscribe();
    this.produtos = this.produtos.filter((produto) => this.produto.id !== produto.id);
    this.EmitProdutosList.emit({ produtos: this.produtos });
  }

}
