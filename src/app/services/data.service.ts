import { Injectable } from '@angular/core';
import { map, Observable, filter } from 'rxjs';
import { User } from '../../model/User';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccessRecord } from '../../model/AccessRecord';
import { Building } from '../../model/Building';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  serverUrl = environment.serverUrl;

  getUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.serverUrl}/api/user`);
  }

  /*
  getAccessRecords(date: string): Observable<Array<AccessRecord>> {
    return this.httpClient.get<ServerAccessRecord[]>(`${this.serverUrl}/api/logs/${date}?all=true`).pipe(map(
      originalArray => originalArray.map(sar => 
        ({ id: sar.id, time: sar.time , building: sar.building.name, user : sar.user.firstname + " " + sar.user.surname , status: sar.status}))
    ));
  }*/

  getAccessRecords(date: string): Observable<Array<AccessRecord>> {
    return this.httpClient.get<ServerAccessRecord[]>(`${this.serverUrl}/api/logs/${date}?all=true`).pipe(map(
      originalArray => originalArray.map(sar => 
        ({ ...sar, building: sar.building.name, user : sar.user.firstname + " " + sar.user.surname}))
    ));
  }

  getAccessRecordsInBuilding2(date: string, buildingName: string): Observable<Array<AccessRecord>> {
    return this.httpClient.get<ServerAccessRecord[]>(`${this.serverUrl}/api/logs/${date}?all=true`).pipe(map(
      originalArray => originalArray.filter(a => a.building.name = buildingName).map(sar => 
        ({ ...sar, building: sar.building.name, user : sar.user.firstname + " " + sar.user.surname}))
    ));
  }

  whoIsInTheBuilding(buildingName: string): Observable<Array<AccessRecord>> {
    const today = new Date().toISOString().split("T")[0].replace("/", "");
     return this.getAccessRecords(today).pipe(map( originalArray => originalArray.filter(r => r.building === buildingName)));
  }

  getBuildings(): Observable<Array<Building>> {
    return this.httpClient.get<Building[]>(`${this.serverUrl}/api/building`);
  }


}

type ServerAccessRecord = AccessRecord & {building: {id: number, name:string}, user: User}