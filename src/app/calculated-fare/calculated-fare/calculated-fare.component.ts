import { Component, OnInit } from '@angular/core';
import { CalculatedFare } from 'src/app/model/CalculatedFare.model';
import { CalculatedFareService } from 'src/app/service/calculated-fare.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculated-fare',
  templateUrl: './calculated-fare.component.html',
  styleUrls: ['./calculated-fare.component.css']
})
export class CalculatedFareComponent implements OnInit {
  public calculatedFares: CalculatedFare[] = [];

  public driverId: String = '';

  constructor(private calculatedFareService: CalculatedFareService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.driverId = params['driverId'];
      }
    );

    this.calculatedFareService.calculateFareByDriverId(this.driverId).subscribe((data: any)=>{
      this.calculatedFares = data;
    })
  }

  backToList(){
    this.router.navigate(['']);
  }

}
