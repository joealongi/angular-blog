import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatDetectionApproachesForFinancialTechnologyFintech } from './threat-detection-approaches-for-financial-technology-fintech';

describe('ThreatDetectionApproachesForFinancialTechnologyFintech', () => {
  let component: ThreatDetectionApproachesForFinancialTechnologyFintech;
  let fixture: ComponentFixture<ThreatDetectionApproachesForFinancialTechnologyFintech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatDetectionApproachesForFinancialTechnologyFintech],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ThreatDetectionApproachesForFinancialTechnologyFintech
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
