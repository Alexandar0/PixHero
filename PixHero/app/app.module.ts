import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroItemComponent } from './heroes/hero-list/hero-item/hero-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroStartComponent } from './heroes/hero-start/hero-start.component';
import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HeroStartComponent,
    HeroEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
