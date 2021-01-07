import { Component, OnInit } from '@angular/core';
import { PaginatedResult, Pagination } from '../../_models/pagination';
import { User } from '../../_models/user';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-sidemember-list',
  templateUrl: './sidemember-list.component.html',
  styleUrls: ['./sidemember-list.component.css']
})
export class SidememberListComponent implements OnInit {
  users: User[];
  pagination: Pagination;
  likesParam: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      //this.pagination = data['users'].pagination;
    });
    //this.likesParam = 'Likers';
    if (this.authService.decodedToken.role === 'Coach') {
      this.likesParam = 'Likees';
    }
    else {
      this.likesParam = 'Likers';
    }
    this.loadUsers();
  }

  loadUsers() {
    this.userService
      .getUsers(
        //this.pagination.currentPage,
        //this.pagination.itemsPerPage,
        this.likesParam
      )
      .subscribe(
        (res: PaginatedResult<User[]>) => {
          this.users = res.result;
          //this.pagination = res.pagination;
        },
        error => {
          this.alertify.error(error);
        }
      );
  }

  //pageChanged(event: any): void {
  //  this.pagination.currentPage = event.page;
  //  this.loadUsers();
  //}
}
  
