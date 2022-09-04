import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApilinksService } from './apilinks.service';
import { catchError, Observable, pipe, throwError } from 'rxjs';
// import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private ApILinks: ApilinksService, private http: HttpClient) { }


  
  uploadFiles = (files: File[], folderName: string) => {

    if (files.length === 0) {
      return;
    }
    let filesToUpload: File[] = files;
    const formData = new FormData();
    // formData.append('file', files[0], files[0].name);

    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file' + index, file, file.name);
    });
    console.log(formData);

    return this.http.post(this.ApILinks.uploadFiles, formData, { reportProgress: true, observe: 'events', params: { folderName: folderName } }).pipe(
      catchError((err) => {
        return throwError(() => err.message);
      })
    )
  }


  getFile(fileName: string, folderName: string) {
    return this.http.get(this.ApILinks.serveFile,
      { params: { fileName: fileName, folderName: folderName }, responseType: 'blob' }).pipe(
        catchError((err) => {
          return throwError(() => err.message);
        })
      )
  }



  async getImagesUrls(files: File[]) {
    console.log(files);
    new Promise((resolve) => {
      let urls: any[] = [];
      for (let file of files)
        this.getImageUrl(file).then(
          url => urls.push(url)
        )
      resolve(urls);

    })
  }

  getImageUrl(file: Blob) {
    return new Promise<string>((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        if (e.target?.result) {

          resolve(e.target?.result as string);
          console.log(e.target?.result);

        }
        else
          reject("error while  creating url");
      }
    });
  }




}
