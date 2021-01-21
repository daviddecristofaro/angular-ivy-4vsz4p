import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { UserService } from "../services/user.service";

@Component({
  selector: "tr[app-user]",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output("onDeleteUser") userDeleted = new EventEmitter();
  constructor(service: UserService) {}
  ngOnInit() {}
  deleteUser() {
    this.userDeleted.emit(this.user);
  }
}
