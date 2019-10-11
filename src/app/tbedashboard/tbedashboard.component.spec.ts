import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbedashboardComponent } from './tbedashboard.component';

describe('TbedashboardComponent', () => {
  let component: TbedashboardComponent;
  let fixture: ComponentFixture<TbedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
