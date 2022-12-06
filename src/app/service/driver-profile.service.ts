import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../model/Driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverProfileService {
  private REST_API_SERVER_URL = environment.apiServerUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getDriverProfileList() : Observable<Driver> {
    return this.httpClient.get<Driver>(`${this.REST_API_SERVER_URL}/driver-profile`)
  }

  public addDriver(driver: Driver): Observable<Driver> {
    return this.httpClient.post<Driver>(`${this.REST_API_SERVER_URL}/driver-profile/`, driver)
  }

  public deleteDriver(driverId: String) : Observable<Driver> {
    return this.httpClient.delete<Driver>(`${this.REST_API_SERVER_URL}/driver-profile/` + driverId)
  }

}
