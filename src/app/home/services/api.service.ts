import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { SettingService } from '../../services/setting.service';
// import { catchError, retry, delay } from 'rxjs/operators';
// import { Products } from './products.model';
import { Observable, throwError } from "rxjs";
// import {
//   HttpClient,
//   HttpHeaders,
//   HttpErrorResponse
// } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { SettingService } from '../../services/setting.service';
 


// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    console.log("I am n api services at extractData ", body);
    return body || {};
  }


  public getListOfGroup(url: string){

    return this.http.get(url);


  //   return this.http.get(url: string, options: {
  //     headers?: HttpHeaders;
  //     observe: 'response';
  //     params?: HttpParams;
  //     reportProgress?: boolean;
  //     responseType?: 'json';
  //     withCredentials?: boolean;
  // }): Observable<HttpResponse<Object>>;
  }


  // public getListOfGroup(url: string,
    
    // ): Observable<HttpResponse<object>> ;

    // Call the http GET
    // return this.http.get(url).pipe(
    //   // map(this.extractData),
    //   catchError(this.handleError)
    // );

  // }

    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
      
  };


  getProducts()  {
    // return this.http.get<Products>(
    //   SettingService.BASE_URL_GET_PRODUCTS, {observe : 'response'}
    //   )
    // .toPromise().then((res)=> res.json())
    // return new Promise((resolve, reject) => {
    //   this.http.get(SettingService.BASE_URL_GET_PRODUCTS)
    // .pipe(
    //   retry(3),
    //   delay(1000),
    //   // .catch
    //     // catchError(this.handleError)
    //   ).toPromise().then(res => {
    //     resolve(res);
    //   }, 
    //   rej => {
    //     reject(rej);
    //   }
    // ) 
    // })  
  }
}
