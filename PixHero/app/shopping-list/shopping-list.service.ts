import { Item } from '../shared/item.model';
import { Subject } from 'rxjs';


export class ShoppingListService {
    itemsChanged = new Subject<Item[]>();
    startedEditing = new Subject<number>();
    private items: Item[] = [
        new Item('Mana Potions', 5),
        new Item('Healing potions', 10),
      ];

    getItems() {
        return this.items.slice();
    }  

    getItem(index: number) {
        return this.items[index];
    }

    addItem(item: Item) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    addItems(items: Item[]) {
    //  for (let item of items) {
    //      this.addItem(item);
    //  }
    this.items.push(...items);
    this.itemsChanged.next(this.items.slice());
    }

    updateItem(index: number, newItem: Item) {
        this.items[index] = newItem;
        this.itemsChanged.next(this.items.slice());
    }

    deleteItem(index: number) {
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    }
}