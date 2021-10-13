import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("Apples", `An apple is an edible fruit produced by an apple tree (Malus domestica).
                                             Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.
                                             The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.`,
  "https://i.pinimg.com/564x/05/39/75/05397576693797e990fad6a764bb8c42.jpg"),
  new Recipe("Mango", `A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar,
                       Bangladesh, and northeastern India.[1] M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two distinct types of modern mango cultivars:
                       the Indian type and the Southeast Asian type.`,
  "https://i.pinimg.com/564x/d9/d5/2a/d9d52a11648a68d1a68645c39ae20176.jpg"),
  new Recipe('Strawberry', `The garden strawberry (or simply strawberry; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria,
                            collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma,
                            bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates.`,
  "https://i.pinimg.com/564x/28/3e/53/283e53880ea4fd483c4968d89b143866.jpg")]
  @Output() showRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.showRecipe.emit(recipe)
  }

}
