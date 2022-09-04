import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iuser } from '../Components/users/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  urll:string="http://localhost:60840/api/Admin/getallUsers"
    getAllusers():Observable<Iuser[]>
    {
      return this.http.get<Iuser[]>(this.urll).pipe(catchError((err=>{
        return throwError(()=>err.message||"internal server ")
      })
      ))
    }

    blockUser(user:Iuser)
    {
      return this.http.put("http://localhost:60840/api/Admin/block/"+user.id,user)
    }
    unBlockUser(user:Iuser)
    {
      return this.http.put("http://localhost:60840/api/Admin/unblock/"+user.id,user)
    }
}
