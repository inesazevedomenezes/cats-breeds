import { Component, Input } from '@angular/core';
import { Breed } from './breed';
import { GetApiService } from '../get-api.service';

@Component({
    selector: 'breed-detail',
    templateUrl: './breed-detail.component.html',
    styleUrls: ['./breed-detail.component.scss']
  })

export class BreedDetailComponent
{   
    constructor(private api:GetApiService)
    {
      
    }
   
   @Input() breed?: Breed;

   randomFact: String;

   ngOnInit()
    {
        this.api.getRandomFact().subscribe(data=>{
            this.randomFact = data.fact;
        })
    }

}
