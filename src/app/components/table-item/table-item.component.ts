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

  showModalInfo = false;
  showModalEdit = false;
  propertiesNotToBeShown: string[] = ['imagem', 'status', 'id'];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  handleShowModalInfo(): void {
    this.showModalInfo = true;
  }

  handleShowModalEdit(): void{
    this.showModalEdit = true;
  }

  onCloseModalInfo(): void {
    this.showModalInfo = false;
  }

  onCloseModalEdit(): void{
    this.showModalEdit = false;
  }

  handleDelete(id: number): void {
    this.apiService.deleteOne(id).subscribe();
    this.produtos = this.produtos.filter((produto) => this.produto.id !== produto.id);
    this.EmitProdutosList.emit(this.produtos);
  }

}
