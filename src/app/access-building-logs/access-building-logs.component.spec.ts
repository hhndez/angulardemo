import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessBuildingLogsComponent } from './access-building-logs.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('AccessBuildingLogsComponent', () => {
  let component: AccessBuildingLogsComponent;
  let fixture: ComponentFixture<AccessBuildingLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessBuildingLogsComponent],
      providers: [provideHttpClient(), provideRouter([])],

    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessBuildingLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
