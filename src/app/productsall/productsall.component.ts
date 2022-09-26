import { Component, OnInit } from '@angular/core';
import { ApiService } from '../share/api.service';
import { AuthService } from '../share/auth.service';
@Component({
  selector: 'app-productsall',
  templateUrl: './productsall.component.html',
  styleUrls: ['./productsall.component.scss']
})
export class ProductsallComponent implements OnInit {
  
  constructor(private auth: AuthService, private api: ApiService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  productArray:any = [];

  inc(prod: any){
    if(prod.quantity != 5){
      prod.quantity +=1;
    }
  }

  dec(prod: any){
    if(prod.quantity != 1){
      prod.quantity -=1;
    }
  }

  itemsCart:any = [];
  addCart(category: any){
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null) {
      let storeDataGet:any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }

    else {
      var id = category.prodId;
      let index:number = -1;
      // let currentUser = JSON.parse(localStorage.getItem('localCart')!);
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0; i<this.itemsCart.length;i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
            this.itemsCart[i].quantity = category.quantity;
            index = i;
            break;
        }
      }
      if(index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

    }
    this.cartNumberFunc();
  }

  cartNumber:number=0;
  cartNumberFunc() {
    var cartValue= JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

  checkboxArray:any = [
    {
      prodId: 1,
      type: "checkbox",
      name: "MAFEX IRON MAN MARK 50",
      img: "../../assets/img1.jpg",
      price: 400,
      quantity: 1,
    },
    {
      prodId: 2,
      type: "checkbox",
      name: "MAFEX LOKI INFINITY WAR",
      img: "../../assets/img2.jpg",
      price: 150,
      quantity: 1,
    },
    {
      prodId: 3,
      type: "checkbox",
      name: "MAFEX CAPTAIN ENDGAME",
      img: "../../assets/img3.jpg",
      price: 80,
      quantity: 1,
    },
    {
      prodId: 4,
      type: "checkbox",
      name: "MAFEX MERA",
      img: "../../assets/img4.jpg",
      price: 80,
      quantity: 1,
    },
    {
      prodId: 5,
      type: "checkbox",
      name: "MAFEX DOCTOR STRANGE INFINITY WAR",
      img: "../../assets/img5.jpg",
      price: 800,
      quantity: 5,
    },
    {
      prodId: 6,
      type: "checkbox",
      name: "SHFIGUARTS DOCTOR STRANGE INFINITY WAR",
      img: "../../assets/img6.jpg",
      price: 80,
      quantity: 3,
    },
    {
      prodId: 7,
      type: "checkbox",
      name: "SHFIGUARTS THANOS FINALL BATTLE",
      img: "../../assets/img7.jpg",
      price: 250,
      quantity: 4,
    },
    {
      prodId: 8,
      type: "checkbox",
      name: "SHFIGUARTS BLACK WIDOW SNOW SUITS",
      img: "../../assets/img8.jpg",
      price: 85,
      quantity: 5,
    },
    {
      prodId: 9,
      type: "checkbox",
      name: "SHFIGUARTS TONY STARK",
      img: "../../assets/img10.jpg",
      price: 95,
      quantity: 5,
    },
    {
      prodId: 10,
      type: "checkbox",
      name: "SHFIGUARTS BLACK WIDOW AVENGERS 1",
      img: "../../assets/img11.jpg",
      price: 76,
      quantity: 4,
    },
    {
      prodId: 11,
      type: "checkbox",
      name: "SHFIGUARTS BLACK WIDOW AVENGERS 2",
      img: "../../assets/img12.jpg",
      price: 110,
      quantity: 2,
    },
    {
      prodId: 12,
      type: "checkbox",
      name: "SHFIGUARTS BLACK WIDOW AVENGERS 3",
      img: "../../assets/img13.jpg",
      price: 95,
      quantity: 5,
    },
    {
      prodId: 13,
      type: "checkbox",
      name: "SHFIGUARTS BLACK WIDOW AVENGERS 4",
      img: "../../assets/img14.jpg",
      price: 65,
      quantity: 4,
    },
    {
      prodId: 14,
      type: "checkbox",
      name: "SHFIGUARTS CAPTAIN AVENGERS 1",
      img: "../../assets/img15.jpg",
      price: 65,
      quantity: 3,
    },
    {
      prodId: 15,
      type: "checkbox",
      name: "SHFIGUARTS CAPTAIN AVENGERS 2",
      img: "../../assets/img16.jpg",
      price: 69,
      quantity: 2,
    },
    {
      prodId: 16,
      type: "checkbox",
      name: "MAFEX CAPTAIN AVENGERS 3",
      img: "../../assets/img17.jpg",
      price: 87,
      quantity: 6,
    },
    {
      prodId: 17,
      type: "checkbox",
      name: "SHFIGUARTS CAPTAIN AVENGERS 4",
      img: "../../assets/img18.jpg",
      price: 79,
      quantity: 2,
    },
    {
      prodId: 18,
      type: "checkbox",
      name: "SHFIGUARTS HULK AVENGERS 1",
      img: "../../assets/img19.jpg",
      price: 85,
      quantity: 3,
    },
    {
      prodId: 19,
      type: "checkbox",
      name: "SHFIGUARTS HULK AVENGERS 2",
      img: "../../assets/img20.jpg",
      price: 79,
      quantity: 2,
    },
    {
      prodId: 20,
      type: "checkbox",
      name: "SHFIGUARTS HULK AVENGERS 3",
      img: "../../assets/img21.jpg",
      price: 91,
      quantity: 3,
    },
    {
      prodId: 21,
      type: "checkbox",
      name: "SHFIGUARTS HULK AVENGERS 4",
      img: "../../assets/img22.jpg",
      price: 45,
      quantity: 3,
    },
    {
      prodId: 22,
      type: "checkbox",
      name: "SHFIGUARTS IRON MAN MARK 6",
      img: "../../assets/img23.jpg",
      price: 68,
      quantity: 4,
    },
    {
      prodId: 23,
      type: "checkbox",
      name: "SHFIGUARTS IRON MAN MARK 45",
      img: "../../assets/img24.jpg",
      price: 78,
      quantity: 2,
    },
    {
      prodId: 24,
      type: "checkbox",
      name: "SHFIGUARTS IRON MAN MARK 50",
      img: "../../assets/img25.jpg",
      price: 88,
      quantity: 3,
    },
    {
      prodId: 25,
      type: "checkbox",
      name: "SHFIGUARTS IRON MAN MARK 85",
      img: "../../assets/img26.jpg",
      price: 90,
      quantity: 2,
    },
    {
      prodId: 26,
      type: "checkbox",
      name: "SHFIGUARTS THOR AVENGERS 1",
      img: "../../assets/img27.jpg",
      price: 65,
      quantity: 3,
    },
    {
      prodId: 27,
      type: "checkbox",
      name: "SHFIGUARTS THOR AVENGERS 2",
      img: "../../assets/img28.jpg",
      price: 55,
      quantity: 3,
    },
    {
      prodId: 28,
      type: "checkbox",
      name: "SHFIGUARTS THOR AVENGERS 3",
      img: "../../assets/img29.jpg",
      price: 89,
      quantity: 4,
    },
    {
      prodId: 29,
      type: "checkbox",
      name: "SHFIGUARTS THOR AVENGERS 4",
      img: "../../assets/img30.jpg",
      price: 90,
      quantity: 3,
    },
  ]

  arrays:any = [];
  getProduct(){
    this.productArray = this.api.productService();
    this.arrays = this.api.productService();
  }

  tempArray:any = [];
  newArray:any = [];
  onChange(event:any) {
    if(event.target.checked){
      this.tempArray = this.arrays.filter((e:any) => e.prodId == event.target.value);
      this.productArray = [];
      this.newArray.push(this.tempArray);
      for(let i=0; i<this.newArray.length; i++){
        var firstArray =this.newArray[i];
        for(let i=0; i<firstArray.length; i++){
          var obj = firstArray[i];
          this.productArray.push(obj);
        }
      }
    }
    else {
      this.tempArray = this.productArray.filter((e:any) => e.id != event.target.value);
      this.newArray = [];
      this.productArray = [];
      this.newArray.push(this.tempArray);
      for(let i=0; i<this.newArray.length; i++){
        var firstArray =this.newArray[i];
        for(let i=0; i<firstArray.length; i++){
          var obj = firstArray[i];
          this.productArray.push(obj);
        }
      }
    }
  }

  searchText: any = '';
  onSearchTextEntered(searchValue: any) {
    this.searchText=searchValue;
    console.log(this.searchText);
  }
}
