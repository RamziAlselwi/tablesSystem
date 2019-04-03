import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from './home/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tablesSystem';
  constructor(private elementRef: ElementRef, private api: ApiService){
    this.api.getProducts().subscribe(res =>{
      console.log("the products are ", res);
    })
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
