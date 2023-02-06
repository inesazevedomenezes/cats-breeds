import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsComponent } from './classes/breeds.component';
import { BreedDetailComponent } from './classes/breed-detail.component';

import {HttpClientModule } from '@angular/common/http';
import { GetApiService } from './get-api.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    BreedDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
