import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IModel } from '../Classes/IModel';
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }




  public _url = "http://localhost:60840/api/Car_Model";

GetAllModels(): Observable < IModel[] >
{

  return this.http.get<IModel[]>(this._url).pipe(catchError
    ((err) => {
      return throwError(() => err.message || "Internal Server Error")
    }
    ))

  }}