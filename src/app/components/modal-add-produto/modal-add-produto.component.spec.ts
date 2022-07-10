import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddProdutoComponent } from './modal-add-produto.component';

describe('ModalAddProdutoComponent', () => {
  let component: ModalAddProdutoComponent;
  let fixture: ComponentFixture<ModalAddProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
