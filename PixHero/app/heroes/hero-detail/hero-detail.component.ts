import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  id: number;
  
  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private router: Router) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
           this.id = +params['id'];
           this.hero = this.heroService.getHero(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.heroService.addItemsToShoppingList(this.hero.items);
  }

  onEditHero() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
