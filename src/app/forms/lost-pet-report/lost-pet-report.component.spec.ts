import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPetReportComponent } from './lost-pet-report.component';

describe('LostPetReportComponent', () => {
  let component: LostPetReportComponent;
  let fixture: ComponentFixture<LostPetReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostPetReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPetReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
