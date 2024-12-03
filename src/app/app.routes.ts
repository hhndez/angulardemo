import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AccessBuildingLogsComponent } from './access-building-logs/access-building-logs.component';

export const routes: Routes = [
    {
        path : "", component : HomeComponent
    },
    {
        path: "users", component: UserPageComponent
    }, 
    {
        path: "emergency", component: AccessBuildingLogsComponent
    }
];
