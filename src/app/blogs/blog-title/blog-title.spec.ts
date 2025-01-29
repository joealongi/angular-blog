import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTitle } from './blog-title';

describe('BlogTitle', () => {
  let component: BlogTitle;
  let fixture: ComponentFixture<BlogTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
