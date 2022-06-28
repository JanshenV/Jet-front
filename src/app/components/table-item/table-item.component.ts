import { Component, OnInit, Input } from '@angular/core';


import { Produto } from 'src/app/Produtos';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  @Input() produto!: Produto;

  showModal = false;


  constructor() { }

  ngOnInit(): void {
  }

  handleShowModal(): void {
    this.showModal = !this.showModal;
  }

}
