import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/auth.service';
import { Product } from '../models/product';
import { orderdetails } from '../models/kiemtraorder.model';
import { OrderService } from '../share/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private auth: AuthService, public OrderService:OrderService) { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }

  getCartDetails:any=[];
  CartDetails() {
    if(localStorage.getItem('localCart')){
        this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
        console.log(this.getCartDetails);
    }
  }

  intQuantity(prodId : any, quantity : any){
    for(let i =0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId) {
        if(quantity != 5){
          this.getCartDetails[i].quantity = parseInt(quantity) +1;
        }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  decQuantity(prodId : any, quantity : any){
    for(let i =0; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId) {
        if(quantity != 1){
          this.getCartDetails[i].quantity = parseInt(quantity)  - 1;
        }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  total:number =0;
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce(function(acc: any, val: any){
          return acc + (val.quantity * val.price);
      }, 0)
    }
  }

  removeall(){
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0; 
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDelete(getCartDetail: any){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0; i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].prodId === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      } 
    }
  }

  cartNumber:number=0;
  cartNumberFunc() {
    var cartValue= JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

 

}
