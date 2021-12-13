import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhoComponent } from './vinho.component';

describe('VinhoComponent', () => {
  let component: VinhoComponent;
  let fixture: ComponentFixture<VinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
