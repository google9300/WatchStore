import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HistoryComponent } from './components/history/history.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent,
     NavBarComponent,
     FooterComponent,
     HomeComponent,
     ShoppingListComponent,
     ShoppingItemComponent,
     CollectionComponent,
     HistoryComponent,
     ContactComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
