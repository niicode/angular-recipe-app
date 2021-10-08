import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("This is a test", "This is just a test recipe",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roasted-butternut-squash-with-cider-vinaigrette-cl-1018-1537566465.jpg?crop=1.00xw:0.334xh;0,0&resize=980:*"),
  new Recipe("This is a test", "This is just a test recipe",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roasted-butternut-squash-with-cider-vinaigrette-cl-1018-1537566465.jpg?crop=1.00xw:0.334xh;0,0&resize=980:*")]

  constructor() { }

  ngOnInit(): void {
  }

}
