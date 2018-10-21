import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricanesComponent } from './hurricanes.component';

describe('HurricanesComponent', () => {
  let component: HurricanesComponent;
  let fixture: ComponentFixture<HurricanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurricanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
