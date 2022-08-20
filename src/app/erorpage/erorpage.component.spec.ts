import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorpageComponent } from './erorpage.component';

describe('ErorpageComponent', () => {
  let component: ErorpageComponent;
  let fixture: ComponentFixture<ErorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
