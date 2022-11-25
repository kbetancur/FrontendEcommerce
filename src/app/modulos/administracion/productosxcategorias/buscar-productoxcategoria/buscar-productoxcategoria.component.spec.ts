import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoxcategoriaComponent } from './buscar-productoxcategoria.component';

describe('BuscarProductoxcategoriaComponent', () => {
  let component: BuscarProductoxcategoriaComponent;
  let fixture: ComponentFixture<BuscarProductoxcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoxcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductoxcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
