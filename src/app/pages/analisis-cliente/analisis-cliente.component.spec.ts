import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisClienteComponent } from './analisis-cliente.component';

describe('AnalisisClienteComponent', () => {
  let component: AnalisisClienteComponent;
  let fixture: ComponentFixture<AnalisisClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisisClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
