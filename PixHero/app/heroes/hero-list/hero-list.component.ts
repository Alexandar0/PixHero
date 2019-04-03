import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.model'
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService,
              private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onNewHero() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
