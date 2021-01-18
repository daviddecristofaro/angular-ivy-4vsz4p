import { Component } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  title = "Users";
  users = [
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
