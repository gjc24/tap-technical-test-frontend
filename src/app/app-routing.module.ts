import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatedFareComponent } from './calculated-fare/calculated-fare/calculated-fare.component';
import { ListDriverProfileComponent } from './driver-profile/list-driver-profile/list-driver-profile.component';

const routes: Routes = [
  {path: '', component: ListDriverProfileComponent},
  {path: 'calculate-fares', component: CalculatedFareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
