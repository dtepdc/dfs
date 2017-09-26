import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvoaComponent } from './dvoa.component';

describe('DvoaComponent', () => {
  let component: DvoaComponent;
  let fixture: ComponentFixture<DvoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
