import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AccessRecord } from '../../model/AccessRecord';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-access-record',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-record.component.html',
  styleUrl: './access-record.component.css'
})
export class AccessRecordComponent implements OnInit {
  constructor(private dataService : DataService) {}

  accessRecords : AccessRecord[] = [];

  ngOnInit(): void {
    const response : Observable<AccessRecord[]>= this.dataService.getAccessRecords("20241203");
    response.subscribe( data => this.accessRecords = data );
    console.log("sent the request", this.accessRecords);
}

}
