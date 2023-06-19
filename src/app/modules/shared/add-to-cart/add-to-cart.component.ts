import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';
import { CartProduct } from 'src/app/models/cart-product';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/Shared/data.service';
import { GlobalHttpService } from 'src/app/services/Shared/global-http.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() productId: number
  mycart: any = []
  myproduct: any;
  myproductprice: any;
  quantity: number = 1
  Cart: any;




  constructor(private productService: ProductService,
    private toastr: ToastrService,
    private GlobalHttpService: GlobalHttpService,
    private dataService: DataService) { }

  ngOnInit() {



  }

  addtocart() {
    this.productService.getProductDetailsById(this.productId).subscribe((result) => {
      result["Quantity"] = this.quantity
      console.log(result);
      this.myquantity(result)
      
      
      
      
    });
  }
  //  cart ko jab bhi use kar rahe ho usse pehale , uss local storage se nikalo by get.json.parse karo(cart ke naam se)
  
  // phir variable me assign karo jise use karoge
  // jb use ho gya ya console karoge toh phir json stringy karo local.set item ussi variable ke sath(cart)
  
  
  myquantity(product) {
    this.mycart = JSON.parse(localStorage.getItem("Cart")) || [];
    if (this.mycart && this.mycart.length) {
      let isIncart = false;
      for (let i = 0; i < this.mycart.length; i++) {
        const element = this.mycart[i];
        if (product.ProductId == element.ProductId) {
          element["Quantity"] += product["Quantity"]
          this.toastr.success(product.Name + 'is Added to the Cart')
          isIncart = true;
          break
        }
        
      }
      if (!isIncart) {
        this.mycart.push(product)
        this.toastr.success(product.Name +'is Added to the Cart')
        
      }
    }
    
    else {
      this.mycart.push(product)
      this.toastr.success(product.Name +'is Added to the Cart')
    }
    localStorage.setItem("Cart", JSON.stringify(this.mycart));
    this.dataService.CartCount.next(this.mycart['length'])

  }





}








