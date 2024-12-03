import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AccessBuildingLogsComponent } from './access-building-logs/access-building-logs.component';
import { AccessRecordComponent } from './access-record/access-record.component';

export const routes: Routes = [
    {
        path : "", component : HomeComponent
    },
    {
        path: "users", component: UserPageComponent
    }, 
    {
        path: "emergency", component: AccessBuildingLogsComponent
    },
    {
        path: "access", component: AccessRecordComponent
    }
];
