import { Component } from "@angular/core";
import { shoppingItem } from "./shopping-item.model";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";


@Component({
  selector: "app-shopping-item",
  templateUrl: "./shopping-item.component.html",
  styleUrls: ["./shopping-item.component.css"]
})
export class ShoppingItemComponent{
  
  public items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list("items-list").valueChanges();
  }
  

}
