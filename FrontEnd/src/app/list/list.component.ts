import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  // The list of heroes
  heroes: any[] = [];

  // Inject the ApiService into the constructor
  constructor(private heroService: ApiService) {}

  //On Intialization, get the list of heroes from the API
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }

  //Evolve the hero with the given name assuming name is an unique identifier
  evolve(name: string): void {
    this.heroService.evolveHero(name).subscribe((result) => {
      // Handle the evolution result here
      console.log(`Evolved ${name}`);
      // Update the list if the API returns the updated list
      this.heroes = result;
    });
  }

  // Get the value of a stat from the hero's stats array
  getStatValue(stats: any[], key: string): number {
    const stat = stats.find(stat => stat.key === key);
    return stat ? stat.value : 0;
  }

}
