import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoxcategoriaComponent } from './eliminar-productoxcategoria.component';

describe('EliminarProductoxcategoriaComponent', () => {
  let component: EliminarProductoxcategoriaComponent;
  let fixture: ComponentFixture<EliminarProductoxcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductoxcategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductoxcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
