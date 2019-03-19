import { Component, OnInit } from "@angular/core";

import { shoppingItem } from "../shopping-item/shopping-item.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
shoppingList: shoppingItem[] = [
  new shoppingItem('TEST NAME', 'TEST COLLECTION', 'TEST SUBCOLLECTION', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiquqm-jY7hAhUJ2OAKHY3ACqwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.jomashop.com%2Fomega-watch-21230412003001.html&psig=AOvVaw2wkgwS-X_lr_jo2TnH966k&ust=1553081473157499', 1000)
]

  constructor() {}

  ngOnInit() {}
}
