import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDivisaComponent } from './detalle-divisa.component';

describe('DetalleDivisaComponent', () => {
  let component: DetalleDivisaComponent;
  let fixture: ComponentFixture<DetalleDivisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDivisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDivisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
