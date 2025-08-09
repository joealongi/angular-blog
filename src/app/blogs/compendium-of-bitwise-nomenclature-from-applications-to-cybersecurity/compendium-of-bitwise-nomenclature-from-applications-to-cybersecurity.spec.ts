import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity } from './compendium-of-bitwise-nomenclature-from-applications-to-cybersecurity';

describe('CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity', () => {
  let component: CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity;
  let fixture: ComponentFixture<CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompendiumOfBitwiseNomenclatureFromApplicationsToCybersecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
