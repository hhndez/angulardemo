import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { UserSortComponent } from "../user-sort/user-sort.component";
import { UserListComponent } from "../user-list/user-list.component";
import { Subscription } from 'rxjs';
import { AccessRecordComponent } from "../../access-record/access-record.component";
import { AccessBuildingLogsComponent } from "../../access-building-logs/access-building-logs.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [UserSortComponent, UserListComponent, AccessRecordComponent, AccessBuildingLogsComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild(UserSortComponent)
  userSortComponent! : UserSortComponent;

  sortSubscription! : Subscription;

  sortOrder : number = 1;

  ngAfterViewInit(): void {
    this.sortSubscription = this.userSortComponent.sortEvent.subscribe(data => {
      this.sortOrder = data;
    });
  }

  ngOnDestroy(): void {
      this.sortSubscription.unsubscribe();
  }

}
