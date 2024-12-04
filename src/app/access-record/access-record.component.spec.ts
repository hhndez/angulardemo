import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRecordComponent } from './access-record.component';
import { provideHttpClient } from '@angular/common/http';
import { AccessRecord } from '../../model/AccessRecord';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

describe('AccessRecordComponent', () => {
  let component: AccessRecordComponent;
  let fixture: ComponentFixture<AccessRecordComponent>;

  //Dummy Data
  const dummyData : Array<AccessRecord> = [
    {id: 1, user: 'test1' , time: '20241114', building: 'test1', status: true},
    {id: 2, user: 'test2', time: '20241114', building: 'test2', status: true},
    {id: 3, user: 'test3', time: '20241114', building: 'test3', status: true},
  ];

  beforeEach(async () => {

    const fakeGetAccessRecords = (param : string) : Observable<AccessRecord[]> => {
      return of(dummyData);
    }

    const mockDataService = jasmine.createSpyObj('DataService', ['getAccessRecords']);

    mockDataService.getAccessRecords.and.callFake(fakeGetAccessRecords);

    const mockDataServiceProvider = {provide: DataService, useValue: mockDataService};

    await TestBed.configureTestingModule({
      imports: [AccessRecordComponent],
      providers : [provideHttpClient(), mockDataServiceProvider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check data is loaded correctly when component starts', () => {
    expect(component.accessRecords.length).toEqual(3);
  });

});
