import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { Products } from './home/services/products.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { SettingService } from './services/setting.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tablesSystem';
  products : Products;
  apiUrl = "https://smarterp.top/api/API/allproducts?api_key=asnvhgk12smartlive20174hfgs587&category_id=null&limit=null&start=null&subcategory_id=&brand_id=&timestamp=&company=30056";
  apiURL2 ="https://smarterp.top/api/API/warehouse?api_key=asnvhgk12smartlive20174hfgs587&company=30056"
  products2;
 

  productsAre: any;
  constructor(private elementRef: ElementRef, private api: ApiService, public http: HttpClient){


    // this.products2 = this.api.getListOfGroup(this.apiUrl); 
    // console.log("the products are ", this.products2);

    this.api
      .getListOfGroup(this.apiURL2)
      .subscribe(
        data => {
          this.productsAre = data;
          console.log("the products are", data);
        },
        err => {
          console.log("the products error", err);
        }
      );

      // this.http.get<Products>(
      // SettingService.BASE_URL_GET_PRODUCTS, {observe : 'response'}
      // )

      // this.http.get(this.apiUrl).subscribe((res)=> {
      //   console.log(" I am in app compoenent the products are ", res);
      // })
    // this.api.getProducts().subscribe((data: Products) => this.products = {
    //   ...data 
    //   // console.log(" I am in app compoenent the products are ", data);
    // })
    // this.api.getProducts().subscribe(resp => {
    //   const keys = resp.headers.keys();
    //   this.header = keys.map(key => 
    //     `${key}: ${resp.headers.get(key)}`);

    //     this.products = {...resp.body}
    //     // console.log("the ")
    //   console.log(" I am in app compoenent the products are ", this.products);
    //   console.log(" I am in app compoenent the products are ", resp.body);


    // })
    // this.api.getProducts().then((res : any)=> {
    //   console.log("the products are ", res );

    // })
  }


  logout(){
    console.log("logout");
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F1F1F6';
 }
}
