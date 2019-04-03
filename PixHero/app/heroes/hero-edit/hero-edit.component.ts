import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  id: number;
  editMode = false;
  heroForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.heroForm);
  }

  private initForm() {
    let heroName = '';
    let heroImagePath = '';
    let heroImagePath2 = '';
    let heroDescription = '';

    if (this.editMode) {
      const hero = this.heroService.getHero(this.id);
      heroName = hero.name;
      heroImagePath = hero.imagePath;
      heroImagePath2 = hero.imagePath2;
      heroDescription = hero.description;
    }

    this.heroForm = new FormGroup({
      'name': new FormControl(heroName),
      'imagePath': new FormControl(heroImagePath),
      'imagePath2': new FormControl(heroImagePath2),
      'description': new FormControl(heroDescription),
    });
  }

}
