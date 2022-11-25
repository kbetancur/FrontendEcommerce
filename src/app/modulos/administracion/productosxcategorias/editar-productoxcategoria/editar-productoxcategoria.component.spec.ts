import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoxcategoriaComponent } from './editar-productoxcategoria.component';

describe('EditarProductoxcategoriaComponent', () => {
  let component: EditarProductoxcategoriaComponent;
  let fixture: ComponentFixture<EditarProductoxcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoxcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoxcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
