import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement } from './stateful-react-javascript-form-fields-through-redux-data-persistence-and-management';

describe('StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement', () => {
  let component: StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement;
  let fixture: ComponentFixture<StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
