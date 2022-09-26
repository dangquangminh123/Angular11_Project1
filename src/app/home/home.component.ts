import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  content:string = "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur eligendi doloribus autem dolorem asperiores minima, minus, laboriosam, harum dignissimos quia perferendis eum quas veritatis quidem repellendus non qui voluptatem?";
  url1: string ="../../assets/bestselling/bestselling.jpg";
  changeImage1(event:any) {
    this.url1=event.target.src;
  }

  url2: string ="../../assets/bestselling/bestselling_a2.jpg";
  changeImage2(event:any) {
    this.url2=event.target.src;
  }

  url3: string ="../../assets/bestselling/bestselling_a3_2.jpg";
  changeImage3(event:any) {
    this.url3=event.target.src;
  }

  url4: string ="../../assets/bestselling/bestselling_a4.jpg";
  changeImage4(event:any) {
    this.url4=event.target.src;
  }

  partnersArray:any = [
    {
      imgName: "../../assets/partsner/shf.jpg"
    },
    {
      imgName: "../../assets/partsner/Yamaguchi.png"
    },
    {
      imgName: "../../assets/partsner/mafex.png"
    },
    {
      imgName: "../../assets/partsner/hasbro.png"
    },
    {
      imgName: "../../assets/partsner/goodsmile.jpg"
    },
    {
      imgName: "../../assets/partsner/tamashii.png"
    },
  ]

  bannerSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  testimonialSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  days:any = 194;
  hours:number = 22;
  mins:number = 14;
  secs:number = 4;

  x =setInterval(()=>{
    var futureDate = new Date("June 23, 2023 18:53:00").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 *24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((distance % (1000 * 60)) / (1000));
    if(distance < 0) {
      clearInterval(this.x);
      this.days = "Offer Is Expired";
    }
  }, 1000)
  


}
