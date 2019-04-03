import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { Item } from '../shared/item.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class HeroService {

    private heroes: Hero[] = [
        new Hero(
          'Warrior',
          'Endurant fighter specialized in defensive fight style',
          'https://i.pinimg.com/originals/fb/5a/3e/fb5a3e25a4ad1dbdf8c9514efadf2ec2.jpg',
          'https://ksr-ugc.imgix.net/assets/003/162/700/249b3bfc04b55b80032b527f08fafc77_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760339&auto=format&gif-q=50&q=92&s=20707fe2d7785b1951e1b168a8f4f231',
          [
              new Item('Longsword', 1),
              new Item('Shield', 1)
          ]),
        new Hero(
            'Ranger',
            'Ranged fighter taking up the fight from a distance',
            'https://i-h2.pinimg.com/564x/e3/74/0f/e3740ffa4a727115f56f301946cdb43a.jpg',
            'https://ksr-ugc.imgix.net/assets/003/162/709/122a2f116ab035aeea41ff387f60b0f6_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760571&auto=format&gif-q=50&q=92&s=a62734efeaf75e757811c26cccb141d4',
            [
              new Item('Longbow', 1),
              new Item('Arrows', 40)
            ]),
        new Hero(
          'Paladin',
          'Hybrid fighter using two handed weapons and divine spells',
          'https://i.pinimg.com/originals/bc/9e/9b/bc9e9b2f0898772a0bb442b921ee7b52.jpg',
          'https://ksr-ugc.imgix.net/assets/003/162/728/7aa3fb596b1ceb643440607989f47015_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760842&auto=format&gif-q=50&q=92&s=99eb7df7f7098ab93644f3bf1cb87565',
          [
            new Item('Two-Handed Hammer', 1),
            new Item('Scrolls', 7)
          ]),   
        new Hero(
                'Monk',
                'Unarmed fighter depending on melee high damage output',
                'https://i-h2.pinimg.com/564x/cb/a7/ae/cba7ae3d69d00ced9a3a5d2996b5786b.jpg',
                'https://ksr-ugc.imgix.net/assets/003/162/703/28457f10393c53c26de2a69bce7665f6_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760429&auto=format&gif-q=50&q=92&s=054d528cef5d576f0e8257512b107e40',
                [
                  new Item('Hand-Bandages', 2)
                ]),
        new Hero(
            'Rogue',
            'Agile fighter keen on sneak attacks and backstabs',
            'https://i-h2.pinimg.com/564x/26/4a/bb/264abb89a0e8f44c565e3ed40c0149a2.jpg',
            'https://ksr-ugc.imgix.net/assets/003/162/715/d66cce41c3c45c3395832d863cacaf8e_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760675&auto=format&gif-q=50&q=92&s=0ebe5449c5cdfb698c04bb5ce4a8fd26',
            [
              new Item('Dagger', 1),
              new Item('Throwing Knives', 20)
            ]),
        new Hero(
              'Pyromancer',
              'Arcane spell caster expert in fire spells',
              'https://i-h2.pinimg.com/564x/f9/7b/20/f97b208f7680859f98ebe3c5e8e1529a.jpg',
              'https://ksr-ugc.imgix.net/assets/003/162/720/39abf4652eb764b3588d1fc7840aa860_original.gif?ixlib=rb-1.1.0&w=680&fit=max&v=1421760729&auto=format&gif-q=50&q=92&s=22392f2f9bebaab2ff7673cd533346b0',
              [
                new Item('Scrolls', 10)
              ])  
             
      ];

      constructor(private slService: ShoppingListService) {}

      getHeroes() {
          return this.heroes.slice();
      }

      getHero(index: number) {
        return this.heroes[index];
      }

      addItemsToShoppingList(items: Item[]) {
        this.slService.addItems(items); 
      }
}