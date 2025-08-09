import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech } from './secure-software-development-and-threat-modeling-approaches-for-financial-technology-fintech';

describe('SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech', () => {
  let component: SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech;
  let fixture: ComponentFixture<SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      SecureSoftwareDevelopmentAndThreatModelingApproachesForFinancialTechnologyFintech
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
