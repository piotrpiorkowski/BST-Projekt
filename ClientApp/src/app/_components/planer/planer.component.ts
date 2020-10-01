import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';


@Component({
  selector: 'app-planer',
  templateUrl: './planer.component.html'
})
export class PlanerComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService) {
  }

  ngOnInit() {
    const user: User = {
      ...<User>{}, username: "xD name xD" };
    this.users = [user]
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }
}
