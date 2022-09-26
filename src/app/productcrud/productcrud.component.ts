import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ApiService } from '../share/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.scss']
})
export class ProductcrudComponent implements OnInit {
  formValue!: FormGroup;
  productObj : Product = new Product();
  productData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor( private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      // prodId: [''],
      name: [''],
      images: [''],
      price: [''],
      quantity: [''],
    })
    this.getAllProduct()
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postProductDetails(){
    // this.productObj.prodId = this.formValue.value.prodId;
    this.productObj.name = this.formValue.value.name;
    this.productObj.images = this.formValue.value.images;
    this.productObj.price = this.formValue.value.price;
    this.productObj.quantity = this.formValue.value.quantity;

    this.api.postProduct(this.productObj).subscribe(res => {
      console.log(res);
      alert("Sản Phẩm được thêm thành công")
      let ref= document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct()
    },
    err=>{
      alert("Sản phẩm thêm thất bại, vui lòng kiểm tra lại")
    })
  }

  getAllProduct(){
    this.api.getProduct().subscribe(res=>{
      this.productData = res;
    })
  }

  deleteProduct(pro:any){
    this.api.deleteProduct(pro.id).subscribe(res=>{
      alert("Xóa sản phẩm thành công");
      this.getAllProduct()
    })
  }

  onEdit(pro:any) {
    this.showAdd=false;
    this.showUpdate=true;
    this.productObj.prodId=pro.id;
    this.formValue.controls['name'].setValue(pro.name);
    this.formValue.controls['images'].setValue(pro.images);
    this.formValue.controls['price'].setValue(pro.price);
    this.formValue.controls['quantity'].setValue(pro.quantity);
  }

  updateProductDetails(){
    // this.productObj.prodId = this.formValue.value.prodId;
    this.productObj.name = this.formValue.value.name;
    this.productObj.images = this.formValue.value.images;
    this.productObj.price = this.formValue.value.price;
    this.productObj.quantity = this.formValue.value.quantity;
    this.api.updateProduct(this.productObj, this.productObj.prodId).subscribe(res=>{
      alert("Sản Phẩm đã được cập nhập!")
      let ref= document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProduct()
    })
  }

  

}
