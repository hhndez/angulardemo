import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './users/user-page/user-page.component';
import { AccessBuildingLogsComponent } from './access-building-logs/access-building-logs.component';
import { AccessRecordComponent } from './access-record/access-record.component';
import { PACKAGE_ROOT_URL } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
        path: "emergency/:building", component: AccessBuildingLogsComponent
    },
    {
        path: "access", component: AccessRecordComponent
    }, 
    {
        path: "**", component: PageNotFoundComponent
    }
];
