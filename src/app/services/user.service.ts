import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable()
export class UserService {
  users: Array<User> = [
    {
      name: "Pippo",
      lastName: "Pluto",
      email: "pippo@pluto.com",
      cf: "PPPPPP11A11A111A"
    },
    {
      name: "Pippo2",
      lastName: "Pluto2",
      email: "Pippo2@pluto.com",
      cf: "PPPPPP11A11A111A2"
    },
    {
      name: "Pippo3",
      lastName: "Pluto3",
      email: "Pippo3@pluto.com",
      cf: "PPPPPP11A11A111A3"
    }
  ];
  constructor() {}
  getUsers() {
    return this.users;
  }
  deleteUser(user) {
    let index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
}
