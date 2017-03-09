import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltatestReportComponent } from './deltatest-report.component';

describe('DeltatestReportComponent', () => {
  let component: DeltatestReportComponent;
  let fixture: ComponentFixture<DeltatestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeltatestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltatestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
