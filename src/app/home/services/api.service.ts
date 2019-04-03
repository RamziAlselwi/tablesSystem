import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { SettingService } from '../../services/setting.service';
import { catchError, retry, delay } from 'rxjs/operators';
import { Products } from './products.model';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getProducts(){
    return this.http.get<Products[]>(SettingService.BASE_URL_GET_PRODUCTS)
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
