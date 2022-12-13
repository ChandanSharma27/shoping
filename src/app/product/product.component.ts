import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  url = 'http://localhost:3000/apis/users/book';
  product : any;
  searchText = '';
  cart : any = [];
  constructor (private http: HttpClient){}
  ngOnInit(){
     this.http.get(this.url).subscribe(result => {
      this.product = result;
     })
  }
  addToCart(ele : any){
    this.cart.push(ele)
  }
}
