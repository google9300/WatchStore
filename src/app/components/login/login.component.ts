import { Component } from "@angular/core";
import { loginService } from "./services/login.service";
import { NgForm } from "@angular/forms";
import { error } from "@angular/compiler/src/util";
import { snapshotChanges } from "@angular/fire/database";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [loginService]
})
export class LoginComponent {
  userInputUsername: string = "";
  constructor(private loginService: loginService) {}
  onSubmit(f: NgForm) {
    let savedData = {};
    this.loginService.getDbUsers();
    this.loginService.ref
      .orderByChild("admin")
      .on("child_added", function(snapshot) {
        const { username, password } = snapshot.val();

        if (f.valid) {
          //  check for user credentials
          const { usernameInput, passwordInput } = f.value;

          if (username === usernameInput && password === passwordInput) {
            // successfully logged in
            console.log('success')
          } else {
            // DO NOT HANDLE
          }
        } else {
          // HANDLE INPUT VALIDATION ERROR
          // return error
        }
      });
  }
}
