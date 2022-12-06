import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatedFareComponent } from './calculated-fare/calculated-fare/calculated-fare.component';
import { CreateDriverProfileComponent } from './driver-profile/create-driver-profile/create-driver-profile.component';
import { ListDriverProfileComponent } from './driver-profile/list-driver-profile/list-driver-profile.component';
import { UpdateDriverProfileComponent } from './driver-profile/update-driver-profile/update-driver-profile.component';

const routes: Routes = [
  {path: '', component: ListDriverProfileComponent},
  {path: 'calculate-fares', component: CalculatedFareComponent},
  {path: 'register-driver', component: CreateDriverProfileComponent},
  {path: 'update-driver', component: UpdateDriverProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
