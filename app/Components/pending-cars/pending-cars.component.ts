import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PendingCarsService } from 'src/app/Services/pending-cars.service';
import { Icar } from './Icar';


@Component({
  selector: 'app-pending-cars',
  templateUrl: './pending-cars.component.html',
  styleUrls: ['./pending-cars.component.scss']
})
export class PendingCarsComponent implements OnInit {

  constructor( private pendingcarsservice:PendingCarsService,private http:HttpClient) { }
  pendingcars: any = []

  ngOnInit(): void {
    this.pendingcarsservice.getAllcars().subscribe(cars=>{
      this.pendingcars=cars
    });
  }

  approved(car:Icar)
  {
   
   this.pendingcarsservice.approveCar(car).subscribe(e=>this.ngOnInit());
  }
   logout() {
    sessionStorage.removeItem('mytoken');
  }

}




