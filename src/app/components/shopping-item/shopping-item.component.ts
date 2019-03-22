import { Component, OnInit } from "@angular/core";
import { shoppingItem } from "./shopping-item.model";

@Component({
  selector: "app-shopping-item",
  templateUrl: "./shopping-item.component.html",
  styleUrls: ["./shopping-item.component.css"]
})
export class ShoppingItemComponent implements OnInit {
  

  shoppingItems: shoppingItem[] = [
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    ),
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    ),
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    ),
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    ),
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    ),
    new shoppingItem(
      "TestName",
      "TestCollection",
      "TestSubcollection",
      "./images/watch1.png",
      5
    )
  ];
  constructor() {}

  ngOnInit() {}
}
