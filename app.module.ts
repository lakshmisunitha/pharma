import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './home/app.routing';
import { MedicinesComponent } from './home/medicines/medicines.component';
import { MedicaldevicesComponent } from './home/medicaldevices/medicaldevices.component';
import { HospitalsComponent } from './home/medicaldevices/hospitals/hospitals.component';
import { DoctersComponent } from './home/medicaldevices/hospitals/docters/docters.component';
import { AyurvedhaComponent } from './home/medicines/ayurvedha/ayurvedha.component';
import { HomeopathyComponent } from './home/medicaldevices/homeopathy/homeopathy.component';
import { MyMedicineDetailComponent } from './home/medicines/my-medicine-detail/my-medicine-detail.component';
import { DoublePipe } from './double.pipe';
import { LogService } from './home/medicines/my-medicine-detail/log.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicinesComponent,
    MedicaldevicesComponent,
    HospitalsComponent,
    DoctersComponent,
    AyurvedhaComponent,
    HomeopathyComponent,
    MyMedicineDetailComponent,
    DoublePipe
                       ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [ LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
