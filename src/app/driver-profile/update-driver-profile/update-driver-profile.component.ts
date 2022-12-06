import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Driver } from 'src/app/model/Driver.model';
import { DriverProfileService } from 'src/app/service/driver-profile.service';

@Component({
  selector: 'app-update-driver-profile',
  templateUrl: './update-driver-profile.component.html',
  styleUrls: ['./update-driver-profile.component.css'],
})
export class UpdateDriverProfileComponent implements OnInit {
  driver: Driver = {
    name: '',
    surname: '',
    email: '',
    vehicleType: '',
    baseFarePrice: '',
    baseFareDistance: '',
  };

  driverId: String = '';
  formSubmitted = false;

  constructor(
    private router: Router,
    private driverProfileService: DriverProfileService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.driverId = params['driverId'];
      }
    );

    this.driverProfileService.getDriverProfileById(this.driverId).subscribe((data: any) => {
      this.driver = data;
    });

    this.driver = {
      name: this.driver.name,
      surname: this.driver.surname,
      email: this.driver.email,
      vehicleType: this.driver.vehicleType,
      baseFarePrice: this.driver.baseFarePrice,
      baseFareDistance: this.driver.baseFareDistance,
    };
  }

  updateDriver(id: any): void {
    const formData = {
      name: this.driver.name,
      surname: this.driver.surname,
      email: this.driver.email,
      vehicleType: this.driver.vehicleType,
      baseFarePrice: this.driver.baseFarePrice,
      baseFareDistance: this.driver.baseFareDistance,
    };

    if(formData.name && formData.surname && formData.email && formData.vehicleType && formData.baseFarePrice && formData.baseFareDistance){
      this.driverProfileService.updateDriver(id, formData).subscribe({
        next: (response) => {
          console.log(response);
          this.formSubmitted = true;
        },
      });
    }
  }

  backToList() {
    this.router.navigate(['']);
  }
}
