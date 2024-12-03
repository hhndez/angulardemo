import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-access-building-logs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './access-building-logs.component.html',
  styleUrl: './access-building-logs.component.css'
})
export class AccessBuildingLogsComponent  implements OnInit {
  constructor(private dataService : DataService) {}

  accessRecords : AccessRecord[] = [];

  ngOnInit(): void {
    this.dataService.whoIsInTheBuilding("Adel Square").subscribe( data => 
      {
        const map = new Map<string, AccessRecord>();
        data.forEach(record => {
          map.set(record.user, record);
        })
        this.accessRecords = Array.from(map.values()).filter(r => r.status = true)
      } );
  }
}
