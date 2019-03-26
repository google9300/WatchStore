import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable()
export class loginService {
  ref;
  private allUsers: Array<{ username: string; password: string }>;

  constructor(private db: AngularFireDatabase) {}

  getDbUsers() {
    this.ref = this.db.database.ref("users");
  }
}
