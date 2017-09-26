import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverUnderComponent } from './over-under.component';

describe('OverUnderComponent', () => {
  let component: OverUnderComponent;
  let fixture: ComponentFixture<OverUnderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverUnderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverUnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
