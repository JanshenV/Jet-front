import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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

  produtoForm!: FormGroup;

  constructor(private apiService: ApiService) {
    this.getProdutos();
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
  }

  get nome() {
    return this.produtoForm.get('nome');
  };

  get descricao() {
    return this.produtoForm.get('descricao');
  };

  handleModalUp() {
    this.addModalUp = !this.addModalUp;
  }

  async handleSubmit() {
    if (this.produtoForm.invalid) {
      return;
    };
    await this.apiService.createProduto(this.produtoForm.value).subscribe();
    this.handleModalUp();
  }

  getProdutos(): void {
    this.apiService.getAll().subscribe((produtos) => (this.produtos = produtos));
  }
}
