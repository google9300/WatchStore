import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { HighlightedCollectionComponent } from './components/highlighted-collection/highlighted-collection.component';

@NgModule({
  declarations: [AppComponent,
     NavBarComponent,
     FooterComponent,
     HomeComponent,
     ShoppingListComponent,
     ShoppingItemComponent,
     HighlightedCollectionComponent,],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
