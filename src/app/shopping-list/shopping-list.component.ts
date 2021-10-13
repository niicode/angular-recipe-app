import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 6),
    new Ingredient("Water Melon", 12)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

}
