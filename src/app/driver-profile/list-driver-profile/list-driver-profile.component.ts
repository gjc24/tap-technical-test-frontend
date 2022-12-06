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
      this.drivers = data;
    })
  }

  deleteDriver(id: any) {
    if(confirm("Are you sure to delete driver: " + id + "?")) {
      this.driverProfileService.deleteDriver(id).subscribe(() => this.ngOnInit());
    }
  }

  goToRegisterDriver(){
    this.router.navigate(['/register-driver']);
}

  goToCalculate(id: any){
      this.router.navigate(['/calculate-fares'], { queryParams: { driverId: id } });
  }

}
