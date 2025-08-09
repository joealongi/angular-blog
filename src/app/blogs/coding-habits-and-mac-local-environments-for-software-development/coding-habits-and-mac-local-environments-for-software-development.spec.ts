import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment } from './coding-habits-and-mac-local-environments-for-software-development';

describe('CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment', () => {
  let component: CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment;
  let fixture: ComponentFixture<CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CodingHabitsAndMacLocalEnvironmentsForSoftwareDevelopment
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
