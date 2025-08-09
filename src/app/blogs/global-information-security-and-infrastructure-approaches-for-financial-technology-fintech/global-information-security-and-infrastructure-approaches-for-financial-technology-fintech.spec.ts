import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech } from './global-information-security-and-infrastructure-approaches-for-financial-technology-fintech';

describe('GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech', () => {
  let component: GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech;
  let fixture: ComponentFixture<GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      GlobalInformationSecurityAndInfrastructureApproachesForFinancialTechnologyFintech
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
