import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  users: User[];
  searchValue: string;

  constructor(public authService: AuthService, public userService: UserService) { }

  ngOnInit() {
    this.getUsersSearch();
  }

  getUsersSearch() {
    this.userService.getUsersSearch().subscribe((result: User[]) => {
      this.users = result;
    }, error => {
      console.log(error);
    });
  }

 
  isItemForCoachVisible(): boolean {
    return this.authService.roleMatch(['Coach']);
  }
}
