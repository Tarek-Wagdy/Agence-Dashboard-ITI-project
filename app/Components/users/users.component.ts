import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Iuser } from './Iuser';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersservice:UsersService) { }

  users:any=[];


  ngOnInit(): void {
    this.users=this.usersservice.getAllusers().subscribe(e=>{this.users=e});
  }

  block(user:Iuser)
  {
   
   this.usersservice.blockUser(user).subscribe(e=>this.ngOnInit());
  }
  unblock(user:Iuser)
  {
   
   this.usersservice.unBlockUser(user).subscribe(e=>this.ngOnInit());
  }
}
