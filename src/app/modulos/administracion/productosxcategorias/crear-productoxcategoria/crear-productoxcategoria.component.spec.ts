import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoxcategoriaComponent } from './crear-productoxcategoria.component';

describe('CrearProductoxcategoriaComponent', () => {
  let component: CrearProductoxcategoriaComponent;
  let fixture: ComponentFixture<CrearProductoxcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoxcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoxcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
