import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRecordComponent } from './access-record.component';

describe('AccessRecordComponent', () => {
  let component: AccessRecordComponent;
  let fixture: ComponentFixture<AccessRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
