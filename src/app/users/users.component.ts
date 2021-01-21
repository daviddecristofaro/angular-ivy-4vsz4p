import { Component, OnInit } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  title = "Users";
  users: Array<User> = [];
  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
  onDeleteUser(user) {
    this.service.deleteUser(user);
  }
}
