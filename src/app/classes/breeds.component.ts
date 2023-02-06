import { Component } from '@angular/core';
import { Breed } from './breed';
import { GetApiService } from '../get-api.service';

@Component({
    selector: 'breeds-list',
    templateUrl: './breeds.component.html',
    styleUrls: ['./breeds.component.scss']
  })

export class BreedsComponent
{   
    constructor(private api:GetApiService)
  {
    
  }
    breedsList: Breed[];
    
    selectedBreed?: Breed;

    page: number = 1;
    count: number = 0;
    tableSize: number;

    onSelect(breed: Breed): void {
        this.selectedBreed = breed;
    }

    getSelectedBreed(): Breed {
        return this.selectedBreed;
    }

    getBreeds(page: number){
        this.api.getBreeds(page).subscribe(data=>{
            this.breedsList = data.data;
            this.tableSize = data.per_page;
            this.count = data.total;
        })
    }

    ngOnInit() {
        this.selectedBreed = undefined;
        this.getBreeds(this.page);
    }

    onListDataChange(event: any) {
        this.page = event;
        this.getBreeds(this.page);
    }
}