import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPantallaInferiorComponent } from './contenido-pantalla-inferior.component';

describe('ContenidoPantallaInferiorComponent', () => {
  let component: ContenidoPantallaInferiorComponent;
  let fixture: ComponentFixture<ContenidoPantallaInferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoPantallaInferiorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoPantallaInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
