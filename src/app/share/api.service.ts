import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProduct(data:any, prodId:number) {
    return this.http.put<any>("http://localhost:3000/posts/"+prodId,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProduct(prodId:number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+prodId).pipe(map((res:any)=>{
      return res;
    }))
  }
   
  productService() {
    return [
      {
        prodId: 1,
        name: "MAFEX IRON MAN MARK 50",
        img: "../../assets/img1.jpg",
        price: 400,
        quantity: 1,
      },
      {
        prodId: 2,
        name: "MAFEX LOKI INFINITY WAR",
        img: "../../assets/img2.jpg",
        price: 150,
        quantity: 1,
      },
      {
        prodId: 3,
        name: "MAFEX CAPTAIN ENDGAME",
        img: "../../assets/img3.jpg",
        price: 80,
        quantity: 1,
      },
      {
        prodId: 4,
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
  }
}

// json-server --watch db.json
