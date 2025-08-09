import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredCybersecurityApproachesForFinancialTechnologyFintech } from './layered-cybersecurity-approaches-for-financial-technology-fintech';

describe('LayeredCybersecurityApproachesForFinancialTechnologyFintech', () => {
  let component: LayeredCybersecurityApproachesForFinancialTechnologyFintech;
  let fixture: ComponentFixture<LayeredCybersecurityApproachesForFinancialTechnologyFintech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayeredCybersecurityApproachesForFinancialTechnologyFintech],
    }).compileComponents();

    fixture = TestBed.createComponent(
      LayeredCybersecurityApproachesForFinancialTechnologyFintech
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
