import { Item } from "../shared/item.model";

export class Hero {
    public name: string;
    public description: string;
    public imagePath: string;
    public imagePath2: string;
    public items: Item[];

    constructor(name: string, desc: string, imagePath: string, imagePath2: string, items: Item[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.imagePath2 = imagePath2;
        this.items = items;
    }
}