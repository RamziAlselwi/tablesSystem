import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { catchError, retry, delay } from 'rxjs/operators';
// import { }
// import 'rxjs/add/operator/toPromise';
import { SettingService } from './../setting.service';
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http : HttpClient) { 
    console.log("I am in api serveices");
  }


  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
      
  // };

  
  getSystemSetting(){
    return new Promise((resolve, reject) => {
      this.http.get(SettingService.BASE_URL_SETTING)
    .pipe(
      retry(3),
      delay(1000),
      // .catch
        // catchError(this.handleError)
      ).toPromise().then(res => {
        resolve(res);
      }, 
      rej => {
        reject(rej);
      }
    ) 
    })  
  }
}
