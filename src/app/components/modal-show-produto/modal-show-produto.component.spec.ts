import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShowProdutoComponent } from './modal-show-produto.component';

describe('ModalShowProdutoComponent', () => {
  let component: ModalShowProdutoComponent;
  let fixture: ComponentFixture<ModalShowProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShowProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalShowProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
