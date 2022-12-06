import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculatedFare } from '../model/CalculatedFare.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatedFareService {
  private REST_API_SERVER_URL = environment.apiServerUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public calculateFareByDriverId(driverId: any) : Observable<CalculatedFare> {
    return this.httpClient.get<CalculatedFare>(`${this.REST_API_SERVER_URL}/fare/calculate-fare/` + driverId)
  }

  public getCalculatedFareListByDriverId(driverId: any) : Observable<CalculatedFare> {
    return this.httpClient.get<CalculatedFare>(`${this.REST_API_SERVER_URL}/fare/calculate-fare/` + driverId)
  }
}
