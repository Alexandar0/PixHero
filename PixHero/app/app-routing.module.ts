import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HeroStartComponent } from "./heroes/hero-start/hero-start.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { HeroEditComponent } from "./heroes/hero-edit/hero-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full'},
    { path: 'heroes', component: HeroesComponent, children: [
        { path: '', component: HeroStartComponent },
        { path: 'new', component: HeroEditComponent },
        { path: ':id', component: HeroDetailComponent },
        { path: ':id/edit', component: HeroEditComponent },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}