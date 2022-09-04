import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/Classes/IBrand';
import { BrandService } from 'src/app/Services/brand.service';
import { FileService } from 'src/app/Services/file.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private brandservice: BrandService, private fileservice: FileService ) { }

  
  DisplayBrands: boolean = false
  Hidden() 
  {
    this.DisplayBrands = false
  }
brands: IBrand [] = []
  errorMessage:string=""
  RenderValues() 
   {

    this.brandservice.getbrands().subscribe(
      brandData => {
        this.brands = brandData;
        console.log(this.brands)
        for(let brand of this.brands)
        {
          this.fileservice.getFile(brand.brandLogo,"brands").subscribe(
            file=>
            {
              console.log(file) 
                this.fileservice.getImageUrl(file as File).then(
                  url  =>{
                    // if(typeof url===`string`)
                    
                      brand.brandLogo = url as string
                      console.log(url)  
                    
                      

                  } 
                )
            }
          )

        }

      },
      error=>
      { this.errorMessage=error}
      
      )
    this.DisplayBrands = true
  }

  ngOnInit(): void
  {

  }
  
}
