import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingAndSecureWorkHabitsForSoftwareDevelopment } from './computing-and-secure-work-habits-for-software-development';

describe('ComputingAndSecureWorkHabitsForSoftwareDevelopment', () => {
  let component: ComputingAndSecureWorkHabitsForSoftwareDevelopment;
  let fixture: ComponentFixture<ComputingAndSecureWorkHabitsForSoftwareDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputingAndSecureWorkHabitsForSoftwareDevelopment],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ComputingAndSecureWorkHabitsForSoftwareDevelopment
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
