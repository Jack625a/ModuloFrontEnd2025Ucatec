import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAlertaComponent } from './contenido-alerta.component';

describe('ContenidoAlertaComponent', () => {
  let component: ContenidoAlertaComponent;
  let fixture: ComponentFixture<ContenidoAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoAlertaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
