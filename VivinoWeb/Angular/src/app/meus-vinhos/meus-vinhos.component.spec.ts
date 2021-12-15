import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusVinhosComponent } from './meus-vinhos.component';

describe('MeusVinhosComponent', () => {
  let component: MeusVinhosComponent;
  let fixture: ComponentFixture<MeusVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
