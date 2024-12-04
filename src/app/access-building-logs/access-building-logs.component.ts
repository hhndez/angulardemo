import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AccessRecord } from '../../model/AccessRecord';
import { Observable } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { BuildingSelectorComponent } from "../building-selector/building-selector.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-access-building-logs',
  standalone: true,
  imports: [NgFor, BuildingSelectorComponent, NgIf],
  templateUrl: './access-building-logs.component.html',
  styleUrl: './access-building-logs.component.css'
})
export class AccessBuildingLogsComponent  implements OnInit {
  constructor(private dataService : DataService, private route: ActivatedRoute) {}

  accessRecords : AccessRecord[] = [];
  //currentBuilding : string = "";

  updateData(buildingName : string) {
    this.dataService.whoIsInTheBuilding(buildingName).subscribe( data => 
      {
        const map = new Map<string, AccessRecord>();
        data.forEach(record => {
          map.set(record.user, record);
        })
        this.accessRecords = Array.from(map.values()).filter(r => r.status = true)
      } );
/*
      this.route.params.subscribe(params => {
        this.currentBuilding = params['building']
        console.log("From building", this.currentBuilding);
      });*/
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //this.currentBuilding = params['building']
      //console.log("From building", this.currentBuilding);
      this.updateData(params['building']);
    });
  }
}
