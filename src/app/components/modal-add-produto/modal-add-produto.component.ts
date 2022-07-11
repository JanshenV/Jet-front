import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Produto } from 'src/app/Produtos';

@Component({
  selector: 'app-modal-add-produto',
  templateUrl: './modal-add-produto.component.html',
  styleUrls: ['./modal-add-produto.component.css']
})
export class ModalAddProdutoComponent implements OnInit {
  @Output() CloseModal: EventEmitter<any> = new EventEmitter<{}>();
  
  @Input() produtos!: Produto[];

  produtoForm!: FormGroup;


  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.produtoForm = new FormGroup({
      imagem: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      estoque: new FormControl(''),
      preco: new FormControl(''),
      status: new FormControl(false),
    });
  };

   async handleSubmit() {
    if (this.produtoForm.invalid) {
      return;
    };
     await this.apiService.createProduto(this.produtoForm.value).subscribe();
     this.produtos.push(this.produtoForm.value);
    this.CloseModal.emit();

  };

  handleCloseModal(): void{
    this.CloseModal.emit();
  };

  //Checkout later why do we need these
  // get nome() {
  //   return this.produtoForm.get('nome');
  // };

  // get descricao() {
  //   return this.produtoForm.get('descricao');
  // };

}
