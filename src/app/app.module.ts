import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDriverProfileComponent } from './driver-profile/list-driver-profile/list-driver-profile.component';
import { CreateDriverProfileComponent } from './driver-profile/create-driver-profile/create-driver-profile.component';
import { UpdateDriverProfileComponent } from './driver-profile/update-driver-profile/update-driver-profile.component';
import { CalculatedFareComponent } from './calculated-fare/calculated-fare/calculated-fare.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListDriverProfileComponent,
    CreateDriverProfileComponent,
    UpdateDriverProfileComponent,
    CalculatedFareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
