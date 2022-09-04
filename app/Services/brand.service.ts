import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IBrand } from '../Classes/IBrand';
import { FileService } from './file.service';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
 

  constructor(private http: HttpClient , private file:FileService )
  { 

  }
  
  public _url = "http://localhost:60840/api/Car_Brand"
  
   getbrands(): Observable<IBrand[]> 
  {

   return this.http.get<IBrand[]>(this._url).pipe(catchError
   ((err) => 
   {
     return throwError(() => err.message||"Internal Server Error")
   }) )
  
}
}