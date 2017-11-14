import { UserServiceService } from './../user-service.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[UserServiceService]
})
export class UsersComponent implements OnInit {
datausers;
  constructor(public userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getdata().subscribe((result) =>this.datausers = result.data);
  }

}
