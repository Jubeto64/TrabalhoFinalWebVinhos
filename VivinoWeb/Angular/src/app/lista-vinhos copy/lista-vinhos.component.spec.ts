import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVinhosComponent } from './lista-vinhos.component';

describe('ListaVinhosComponent', () => {
  let component: ListaVinhosComponent;
  let fixture: ComponentFixture<ListaVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
