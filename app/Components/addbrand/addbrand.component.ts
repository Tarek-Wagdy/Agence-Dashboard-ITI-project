import { Component, OnInit } from '@angular/core';
import { IAddBrand } from 'src/app/Classes/IAddBrand';
import { AddbrandService } from 'src/app/Services/addbrand.service';
import { FileService } from 'src/app/Services/file.service';
import { HttpClient, HttpEventType, HttpErrorResponse, HttpProgressEvent } 
from '@angular/common/http';
@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.scss']
})
export class AddbrandComponent implements OnInit {

  constructor(private addbrand: AddbrandService ,private fileService:FileService) { }

  Message: any = "";
  errorMessage: any = "";
  
  brand: IAddBrand = 
  {
    brandName: "",
    brandLogo: "",
   
  }

  OnSubmit(brand: IAddBrand) {
    console.log(brand);
    console.log(this.files)
    //addbrand Service
    this.fileService.uploadFiles(this.files ,"brands")?.subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress && event.total != null)
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {

          //addbrand Service
          this.addbrand.AddBrand(this.brand).subscribe(

            imagesIDs => {
              console.log(brand)
              console.log(imagesIDs);
              this.uploadMessage = `upload images succeeded ${imagesIDs}`;

            },
            err => alert(err)
          )      

        }
      },
      error => alert(error)
    )

  }
  logoSource:any

  getBrandFile(e:any)
  {
    this.handleBrandLogo(e.target?.files[0])
  }
  
uploadProgress:number=0;

uploadMessage:string=``
   files: File[] = []
   
  handleBrandLogo(file: File)
  {
   console.log(file);
     this.getLogoUrl(file).then((URL) =>
      {
      this.logoSource=URL

      })
      this.files=[]
      this.files.push(file);
    console.log(this.files);
   
  }

  getLogoUrl(file: File) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        if (e.target?.result)
        {
          resolve(e.target?.result);
          console.log(e.target?.result);
        }
  
        else
          reject("error while  creating url");
      }
    });
  }

  inputClicked()
  {
    let inputElem=document.getElementById("logo");
    inputElem?.click();
    console.log(inputElem);
  }

  ngOnInit(): void {
  }
   
  


}
