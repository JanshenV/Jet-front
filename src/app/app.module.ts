import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Http Request
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { ModalAddProdutoComponent } from './components/modal-add-produto/modal-add-produto.component';
import { ModalShowProdutoComponent } from './components/modal-show-produto/modal-show-produto.component';
import { ModalEditProdutoComponent } from './components/modal-edit-produto/modal-edit-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    TableItemComponent,
    ModalAddProdutoComponent,
    ModalShowProdutoComponent,
    ModalEditProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
