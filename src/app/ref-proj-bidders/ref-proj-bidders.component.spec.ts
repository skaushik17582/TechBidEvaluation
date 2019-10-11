import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefProjBiddersComponent } from './ref-proj-bidders.component';

describe('RefProjBiddersComponent', () => {
  let component: RefProjBiddersComponent;
  let fixture: ComponentFixture<RefProjBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefProjBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefProjBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
