import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { __param } from 'tslib';
import { Icar } from '../Components/pending-cars/Icar';

@Injectable({
  providedIn: 'root'
})
export class PendingCarsService {

  constructor(private http:HttpClient) { }
  urll:string="http://localhost:60840/api/Admin/getAllcars"
    getAllcars():Observable<Icar[]>
    {
      
      return this.http.get<Icar[]>(this.urll).pipe(catchError((err=>{
        return throwError(()=>err.message||"internal server ")
      })
      ))
    }

    approveCar(car:Icar)
    {
      return this.http.put("http://localhost:60840/api/Admin/approved/"+car.id,car)
    }
  getCarImgs(carId: number): Observable<string[]>
    {
      return this.http.get<string[]>("http://localhost:60840/api/Car_Images/ImagesById",{ params: { carId :carId}}
      
      ).pipe(catchError(
        err=>
        {
          return throwError(()=>err.message)
        }
      ))
    }

  getcarbyid(id: any): Observable<Icar> {
    return this.http.get<Icar>("http://localhost:60840/api/Car/" + id).pipe(catchError((err) => {

      return throwError(() => err.message)

    }))

  }
}
