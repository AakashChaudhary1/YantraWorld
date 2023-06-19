import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product/product.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.scss']
})
export class CarddetailsComponent implements OnInit {
  productlist:any

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.getcardlist()
  }

getcardlist(){
  let filterobj={
  
      "DepartmentId": 0,
      "CategoryId": 0,
      "SubCategoryId": 0,
      "PageSize": 100,
      "ReceivedCount": 0,
      "CurrentPage": 1,
      "SearchString": "",
      "orderBy": null,
      
  
  }
  this.productservice.getProductList(filterobj).subscribe((result)=>{
   console.log(result)
   this.productlist=result["data"]["Products"]
  })
}
}
