import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Item } from '../shared/item.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  items: Item[];
  private subscription: Subscription

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.slService.getItems();
    this.subscription = this.slService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
  }

  onEditStuff(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
