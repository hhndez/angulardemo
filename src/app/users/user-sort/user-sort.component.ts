import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sort',
  standalone: true,
  imports: [],
  templateUrl: './user-sort.component.html',
  styleUrl: './user-sort.component.css'
})
export class UserSortComponent {

  constructor(private router : Router) {}

  @Output()
  sortEvent : EventEmitter<number> = new EventEmitter<number>();

  sortType = 0;

  handleClick(sortType: number) {
    this.sortEvent.emit(sortType);
    this.sortType = sortType;
    this.router.navigate(["users"], { queryParams: { sortType : sortType } });
  }

}
