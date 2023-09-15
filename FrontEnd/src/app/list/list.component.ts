import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heroes: any[] = [];

  constructor(private heroService: ApiService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }

}
