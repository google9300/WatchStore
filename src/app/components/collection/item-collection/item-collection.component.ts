import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { shoppingItem } from "../../shopping-item/shopping-item.model";


@Component({
  selector: "app-item-collection",
  templateUrl: "./item-collection.component.html",
  styleUrls: ["./item-collection.component.css"]
})

export class ItemCollectionComponent {
  public items: Observable<any[]>;
  itemDetails: shoppingItem[] = [
    new shoppingItem("TEST","TEST","TEST","TEST",5)
  ]
  constructor(db: AngularFireDatabase) {
    this.items = db.list("items-list").valueChanges();
  }
 

  
}
