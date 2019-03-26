import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { HistoryComponent } from "./components/history/history.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ItemCollectionComponent } from "./components/collection/item-collection/item-collection.component";
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "history", component: HistoryComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "collection",
    component: CollectionComponent,
    children: [
      { path: "", component: ShoppingListComponent },
      { path: "itemInfo", component: ItemCollectionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
