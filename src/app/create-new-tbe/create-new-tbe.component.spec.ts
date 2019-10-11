import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTBEComponent } from './create-new-tbe.component';

describe('CreateNewTBEComponent', () => {
  let component: CreateNewTBEComponent;
  let fixture: ComponentFixture<CreateNewTBEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTBEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
