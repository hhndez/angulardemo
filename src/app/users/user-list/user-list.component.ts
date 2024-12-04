import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../../model/User';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnChanges {

  constructor(private dataService : DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  users : User[] =[];

  @Input()
  sortOrder : number = 1;

  ngOnInit(): void {
      const response : Observable<User[]>= this.dataService.getUsers();
      response.subscribe( data => {
        this.users = data;
      } );
      console.log("sent the request", this.users);

      this.activatedRoute.queryParams.subscribe(params => {
        this.sortOrder = params["sortType"];
        this.sortNow();
      }); 
  }

  sortNow() {
    if (this.sortOrder === 1) {
      this.users.sort( (a,b) => a.id - b.id);
    }
    if (this.sortOrder === 2) {
      this.users.sort( (a,b) => a.firstname.localeCompare(b.firstname ));
    }
    if (this.sortOrder === 3) {
      this.users.sort( (a,b) => a.surname.localeCompare(b.surname ));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.sortNow();
  }

}
