import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personas } from './personas.component';

describe('PersonasComponent', () => {
  let component: Personas;
  let fixture: ComponentFixture<Personas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Personas ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Personas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
