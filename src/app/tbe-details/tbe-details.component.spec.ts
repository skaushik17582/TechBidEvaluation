import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbeDetailsComponent } from './tbe-details.component';

describe('TbeDetailsComponent', () => {
  let component: TbeDetailsComponent;
  let fixture: ComponentFixture<TbeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
