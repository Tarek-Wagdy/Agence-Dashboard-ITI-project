import { Component, OnInit } from '@angular/core';
import { IAddModel } from 'src/app/Classes/IAddModel';
import { AddmodelService } from 'src/app/Services/addmodel.service';

import { HttpClient, HttpEventType, HttpErrorResponse, HttpProgressEvent }from '@angular/common/http';
import { BrandService } from 'src/app/Services/brand.service';
import { IBrand } from 'src/app/Classes/IBrand';

@Component({
  selector: 'app-addmodel',
  templateUrl: './addmodel.component.html',
  styleUrls: ['./addmodel.component.scss']
})
export class AddmodelComponent implements OnInit {

  constructor(private addmodel: AddmodelService,  private brandservice: BrandService) { }
 
  Message: any = "";
  errorMessage: any = "";
  model: IAddModel = {
    model_Name: "",
   carBrand_Name: "",

  }
  //Add Model
  OnSubmit(model: IAddModel) {
    console.log(model);
          this.addmodel.AddModel(this.model).subscribe(
            Data => {
              this.Message = Data;

            },
            error => { this.errorMessage = error }
        
    )

  }

//Get All Models
  brands: any = []
  errMessage: string = "";
  RenderValues() {

    this.brandservice.getbrands().subscribe(

      brandData => {
        this.brands = brandData;

      },
      error => { this.errMessage = error }

    )

  }

  ngOnInit(): void {

    this.RenderValues()
  }


}
