import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreedsComponent } from './classes/breeds.component';
import { BreedDetailComponent } from './classes/breed-detail.component';

const routes: Routes = [
  {path: 'breeds-list', component: BreedsComponent},
  {path: 'breed-detail/:breed', component: BreedDetailComponent},
  {path: '', redirectTo: '/breeds-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
