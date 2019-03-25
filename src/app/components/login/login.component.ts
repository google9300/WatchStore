import { Component } from "@angular/core";
import { loginService } from "./services/login.service";
import { NgForm } from "@angular/forms"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [loginService]
})
export class LoginComponent {
  userInputUsername: string = "";
   dataValue = {};  
  constructor(private loginService: loginService) {}
  onSubmit(f: NgForm) {
    console.log(f.value.usernameInput);  // { first: '', last: '' }
    console.log(f.valid);  // false
    return this.userInputUsername =f.value.usernameInput;
    console.log(this.dataValue)
  }
  foo() {
    this.loginService.getDbUsers();
    // this.loginService.ref
    //   .orderByChild("admin")
    //   .limitToFirst(1)
    //   .on(
    //     "child_added",
    //     function(snapshot) {
    //       console.log(snapshot.key);
    //     },
    //     error => console.log(error)
    //   );
    this.loginService.ref.on("value", function(snapshot) {
      var dbUser = snapshot.val();
      console.log(snapshot.val());
    });
    console.log(this.userInputUsername);
  }
  login() {
    console.log(this.dataValue);
  }
  // bar() {
  //   this.loginService.getAllUsers().subscribe(
  //     allUsers => {
  //       // const foundUser = _.find(allUsers, {
  //       //   username: "admin",
  //       //   password: "p@ssw0rd"
  //       // });
  //       // console.log(allUsers);
  //       // console.log(foundUser);

  //       const foundUser = allUsers.find(
  //         user => user.username === "admin" && user.password === "p@ssw0rd"
  //       );

  //       console.log(foundUser);
  //     },
  //     error => console.log(error)
  //   );
  // }
}
