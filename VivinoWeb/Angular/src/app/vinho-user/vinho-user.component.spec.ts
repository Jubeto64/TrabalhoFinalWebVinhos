import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhoUserComponent } from './vinho-user.component';

describe('VinhoUserComponent', () => {
  let component: VinhoUserComponent;
  let fixture: ComponentFixture<VinhoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinhoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
