import { Product } from "./product";
import { khachhang } from "./khachhang.model"; 
export class orderdetails{
    public id:number=0;
    public total:number=0;
    public cart:Product[]=[];
    public khach:khachhang=new khachhang();
  }