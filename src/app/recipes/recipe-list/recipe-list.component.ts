import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','simply recipe','https://chatelaine.com/wp-content/uploads/2017/08/Grilled-steak-recipe-with-caesar-salad.jpg'),
    new Recipe('A Test Recipe', ' simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]
}
