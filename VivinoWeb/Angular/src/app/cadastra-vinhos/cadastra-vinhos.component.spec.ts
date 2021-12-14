import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraVinhosComponent } from './cadastra-vinhos.component';

describe('CadastraVinhosComponent', () => {
  let component: CadastraVinhosComponent;
  let fixture: ComponentFixture<CadastraVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
