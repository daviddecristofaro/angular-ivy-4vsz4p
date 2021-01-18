import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor() {}
  getUsers() {
    return [
      {
        name: "Pippo",
        lastName: "Pluto",
        email: "pippo@pluto.com",
        cf: "PPPPPP11A11A111A"
      },
      {
        name: "Pippo",
        lastName: "Pluto",
        email: "pippo@pluto.com",
        cf: "PPPPPP11A11A111A"
      },
      {
        name: "Pippo",
        lastName: "Pluto",
        email: "pippo@pluto.com",
        cf: "PPPPPP11A11A111A"
      }
    ];
  }
}
