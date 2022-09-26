import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem =data;
    });
  }

  ngOnInit(): void {
    this.cartItemFunc();
  }

  id:any;
  drop(param:any){
    if(this.id === param) {

     this.id ="";
    }
    else {
      this.id=param;
    }
  }

  cartItem:number=0;
  cartItemFunc=()=>{
      if(localStorage.getItem('localCart') != null){
        var cartCount = JSON.parse(localStorage.getItem('localCart')!);
        this.cartItem = cartCount.length;
      }
  }
}
