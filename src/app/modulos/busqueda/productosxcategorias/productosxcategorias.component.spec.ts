import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosxcategoriasComponent } from './productosxcategorias.component';

describe('ProductosxcategoriasComponent', () => {
  let component: ProductosxcategoriasComponent;
  let fixture: ComponentFixture<ProductosxcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosxcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosxcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
