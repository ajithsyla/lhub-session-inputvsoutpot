import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disheslist = [{type: 'veg', name: 'Crispy Chicken', content: 'i like KFC Chicken'}];
  // dishName= '';
  // dishResipe = '';

  // onAddVeg(){
  //   this.dishes.push({
  //     type: 'veg',
  //     name: this.dishName,
  //     content: this.dishResipe
  //   });
  // }

  // onAddNonVeg(){
  //   this.dishes.push({
  //     type: 'nonveg',
  //     name: this.dishName,
  //     content: this.dishResipe
  //   });
  // }

}
