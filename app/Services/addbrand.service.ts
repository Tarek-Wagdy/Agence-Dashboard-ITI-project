import { Injectable } from '@angular/core';
import { IAddBrand } from '../Classes/IAddBrand';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddbrandService {

  constructor(private http: HttpClient) { }

  public _url = "http://localhost:60840/api/Car_Brand"
  AddBrand(brand: IAddBrand) {
    return this.http.post(this._url, brand).pipe(catchError
      ((err) => {
        return throwError(() => err.message || "Internal Server Error")
      }
      ))

  }
}
