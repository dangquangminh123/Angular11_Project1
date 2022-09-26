import { Injectable } from '@angular/core';
import { orderdetails } from '../models/kiemtraorder.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  KEY="orderCart"
  constructor() { }

  createCartOder(order:orderdetails){
    order.id=Date.now() / 1000 | 0;
    let listorder=this.loadOder();
    listorder.push(order);
    localStorage.setItem(this.KEY,JSON.stringify(listorder));
  }

  loadOder(){
    try {
      let strLocal=localStorage.getItem(this.KEY);
      if(strLocal&&strLocal!=""){
        return JSON.parse(strLocal);
      }
      else{
        return [];
      }
    } catch (error) {
      return [];
    }


  }
}
