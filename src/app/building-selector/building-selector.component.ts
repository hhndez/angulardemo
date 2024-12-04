import { Component, OnInit } from '@angular/core';
import { Building } from '../../model/Building';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-building-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './building-selector.component.html',
  styleUrl: './building-selector.component.css'
})
export class BuildingSelectorComponent implements OnInit {
  buildings : Building[] = [];

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
      this.dataService.getBuildings().subscribe(data => this.buildings = data);
  }
}
