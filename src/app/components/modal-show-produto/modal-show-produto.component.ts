import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Produto } from 'src/app/Produtos';

@Component({
  selector: 'app-modal-show-produto',
  templateUrl: './modal-show-produto.component.html',
  styleUrls: ['./modal-show-produto.component.css']
})
export class ModalShowProdutoComponent implements OnInit {
  @Output() CloseModalInfo: EventEmitter<any> = new EventEmitter<{}>();

  @Input() produto!: Produto;

  constructor() { }

  ngOnInit(): void {
  }


  handleCloseModal(): void{
    this.CloseModalInfo.emit();
  }
}
