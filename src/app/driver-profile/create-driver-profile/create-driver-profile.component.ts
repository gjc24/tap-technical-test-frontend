import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/model/Driver.model';
import { DriverProfileService } from 'src/app/service/driver-profile.service';

@Component({
  selector: 'app-create-driver-profile',
  templateUrl: './create-driver-profile.component.html',
  styleUrls: ['./create-driver-profile.component.css'],
})
export class CreateDriverProfileComponent implements OnInit {
  driver: Driver = {
    name: '',
    surname: '',
    email: '',
    vehicleType: '',
    baseFarePrice: '',
    baseFareDistance: '',
  };

  formSubmitted = false;

  constructor(
    private router: Router,
    private driverProfileService: DriverProfileService
  ) {}

  ngOnInit(): void {}

  addDriver(): void {
    const formData = {
      name: this.driver.name,
      surname: this.driver.surname,
      email: this.driver.email,
      vehicleType: this.driver.vehicleType,
      baseFarePrice: this.driver.baseFarePrice,
      baseFareDistance: this.driver.baseFareDistance,
    };

    if(formData.name && formData.surname && formData.email && formData.vehicleType && formData.baseFarePrice && formData.baseFareDistance){
      this.driverProfileService.addDriver(formData).subscribe({
        next: (response) => {
          console.log(response);
          this.formSubmitted = true;
        },
      });
    }
  }

  newDriver(): void {
    this.formSubmitted = false;
    this.driver = {
      name: '',
      surname: '',
      email: '',
      vehicleType: '',
      baseFarePrice: '',
      baseFareDistance: '',
    };
  }

  backToList() {
    this.router.navigate(['']);
  }
}
