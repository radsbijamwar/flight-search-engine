import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerDropdownComponent } from './passanger-dropdown.component';

describe('PassangerDropdownComponent', () => {
  let component: PassangerDropdownComponent;
  let fixture: ComponentFixture<PassangerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
