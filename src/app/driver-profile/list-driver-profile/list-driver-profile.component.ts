import { Component, OnInit } from '@angular/core';
import { DriverProfileService } from '../../service/driver-profile.service';
import { Driver } from '../../model/Driver.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-driver-profile',
  templateUrl: './list-driver-profile.component.html',
  styleUrls: ['./list-driver-profile.component.css']
})
export class ListDriverProfileComponent implements OnInit {

  public drivers: Driver[] = [];

  constructor(public driverProfileService: DriverProfileService, private router: Router) { }

  ngOnInit(): void {
    this.driverProfileService.getDriverProfileList().subscribe((data: any)=>{
      console.log(data);
      this.drivers = data;
    })
  }

  deleteDriver(id: any) {
    this.driverProfileService.deleteDriver(id).subscribe(() => this.ngOnInit());
  }


  goToCalculate(id: any){
      this.router.navigate(['/calculate-fares'], { queryParams: { driverId: id } });
  }

}
