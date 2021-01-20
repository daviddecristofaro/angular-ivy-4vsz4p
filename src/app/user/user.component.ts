import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../users/user.service";

@Component({
  selector: "tr[app-user]",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input()
  user;
  constructor(service: UserService) {}
  ngOnInit() {}
  deleteUser() {
    alert(this.user.name);
  }
}
