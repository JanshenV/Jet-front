import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/Produtos';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-edit-produto',
  templateUrl: './modal-edit-produto.component.html',
  styleUrls: ['./modal-edit-produto.component.css']
})
export class ModalEditProdutoComponent implements OnInit {
  @Output() CloseModalEdit: EventEmitter<any> = new EventEmitter<{

  }>();
  @Input() produto!: Produto;
  @Input() produtos!: Produto[];
  
  produtoForm!: FormGroup;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.produtoForm = new FormGroup({
      imagem: new FormControl(this.produto.imagem),
      nome: new FormControl(this.produto.nome, [Validators.required]),
      descricao: new FormControl(this.produto.descricao, [Validators.required]),
      estoque: new FormControl(this.produto.estoque),
      preco: new FormControl(this.produto.preco),
      status: new FormControl(this.produto.status),
    });
  }

  async handleSubmit(){
    if (this.produtoForm.invalid) {
      return;
    };
    await this.apiService.editProduto(this.produtoForm.value, this.produto.id).subscribe();
    const indexOfProduto = this.produtos.indexOf(this.produto);
    this.produtos[indexOfProduto] = this.produtoForm.value;

    this.CloseModalEdit.emit();
  };

  handleCloseModalEdit(): void {
    this.CloseModalEdit.emit();
  }

}
