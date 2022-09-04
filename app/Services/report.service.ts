import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IReport } from '../Classes/IReport';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  public _url = "http://localhost:60840/api/Reports/Get_All";

  getReports(): Observable<IReport[]> {

    return this.http.get<IReport[]>(this._url).pipe(catchError
      ((err) => {
        return throwError(() => err.message || "Internal Server Error")
      }
      ))

  }
}
