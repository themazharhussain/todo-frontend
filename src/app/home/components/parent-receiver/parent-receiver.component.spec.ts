import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReceiverComponent } from './parent-receiver.component';

describe('ParentReceiverComponent', () => {
  let component: ParentReceiverComponent;
  let fixture: ComponentFixture<ParentReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentReceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
