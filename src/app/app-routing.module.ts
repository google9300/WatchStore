import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { HistoryComponent } from "./components/history/history.component";
import { ContactComponent } from "./components/contact/contact.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "collection", component: CollectionComponent },
  { path: "history", component: HistoryComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
