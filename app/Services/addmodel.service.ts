import { Injectable } from '@angular/core';
import { IAddModel } from '../Classes/IAddModel';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddmodelService {

  constructor(private http: HttpClient) { }

  public _url = "http://localhost:60840/api/Car_Model";
  AddModel(model: IAddModel) {
    return this.http.post(this._url, model).pipe(catchError
      ((err) => {
        return throwError(() => err.message || "Internal Server Error")
      }
      ))

  }
}
