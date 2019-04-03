import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Item } from '../../shared/item.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedStuffIndex: number;
  editedStuff: Item;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedStuffIndex = index;
          this.editMode = true;
          this.editedStuff = this.slService.getItem(index);
          this.slForm.setValue({
            name: this.editedStuff.name,
            amount: this.editedStuff.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newItem = new Item(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateItem(this.editedStuffIndex, newItem);
    } else {
      this.slService.addItem(newItem);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteItem(this.editedStuffIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
