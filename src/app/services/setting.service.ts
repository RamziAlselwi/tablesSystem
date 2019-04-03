import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SettingService {

  static BASE_URL_SETTING = "https://smarterp.top/api/API/setting?api_key=asnvhgk12smartlive20174hfgs587&company=demo&user_id=5";
  static BASE_URL_GET_PRODUCTS ="https://smarterp.top/api/API/allproducts?api_key=asnvhgk12smartlive20174hfgs587&category_id=null&limit=null&start=null&subcategory_id=&brand_id=&timestamp=&company=30056";
  constructor() { 

  }
}
