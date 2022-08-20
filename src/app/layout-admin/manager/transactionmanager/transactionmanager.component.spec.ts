import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionmanagerComponent } from './transactionmanager.component';

describe('TransactionmanagerComponent', () => {
  let component: TransactionmanagerComponent;
  let fixture: ComponentFixture<TransactionmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
