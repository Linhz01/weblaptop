import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducesmanagerComponent } from './introducesmanager.component';

describe('IntroducesmanagerComponent', () => {
  let component: IntroducesmanagerComponent;
  let fixture: ComponentFixture<IntroducesmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducesmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducesmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
