import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/Services/file.service';
import { PendingCarsService } from 'src/app/Services/pending-cars.service';
import { Icar } from '../pending-cars/Icar';

@Component({
  selector: 'app-displaycarimages',
  templateUrl: './displaycarimages.component.html',
  styleUrls: ['./displaycarimages.component.scss']
})
export class DisplaycarimagesComponent implements OnInit {

  constructor(private pendingcarservice: PendingCarsService , private fileservice :FileService, private routerservice:ActivatedRoute) { 

    this.ShowImgs()
    console.log(this.imgs)
  }
   carId:number=this.routerservice.snapshot.params['id'] 
    imgs:string[]=[];
    poster!:string
   ShowImgs()
   {
     this.pendingcarservice.getCarImgs(this.carId).subscribe(
      imgs=>{
        this.imgs=imgs;
        console.log(this.imgs)
        for(let i =0; i<this.imgs.length;i++)
        {
          this.fileservice.getFile(this.imgs[i],"usersCars").subscribe(
            async file=>{
              this.imgs[i]=await this.fileservice.getImageUrl(file);
      

            },
            err=>alert(err)
          )
        }

      }
     )
   }

   ngOnInit(): void
  {
     this.pendingcarservice.getcarbyid(this.carId).subscribe(
      car=>
      {
        console.log(car);
         this.fileservice.getFile(car.poster
          ,"usersCars").subscribe(
        async file=>{
          this.poster=await this.fileservice.getImageUrl(file);
        }
      )
      }
     )
  }

}
