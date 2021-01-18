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
  }
}
