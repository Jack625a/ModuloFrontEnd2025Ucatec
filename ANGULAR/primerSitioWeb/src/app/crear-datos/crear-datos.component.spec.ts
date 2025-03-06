import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDatosComponent } from './crear-datos.component';

describe('CrearDatosComponent', () => {
  let component: CrearDatosComponent;
  let fixture: ComponentFixture<CrearDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
