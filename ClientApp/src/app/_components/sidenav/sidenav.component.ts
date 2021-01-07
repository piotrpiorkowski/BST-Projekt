import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
 

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  isItemForCoachVisible(): boolean {
    return this.authService.roleMatch(['Coach']);
  }
}
