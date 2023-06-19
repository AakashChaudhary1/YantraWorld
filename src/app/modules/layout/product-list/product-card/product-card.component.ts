import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/Shared/data.service';
import { GlobalHttpService } from 'src/app/services/Shared/global-http.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productData') productData:any
  copied: boolean;
   
  constructor(private toastr: ToastrService,
    public dataService: DataService,
    public GlobalHttpService: GlobalHttpService,) {
  }

  ngOnInit() {
    // console.log(this.productData);
    
  }
  onUpdateQuantity(type, product) {
  }

  notifyYantra(product) {
  }
 whatsapp(text){
   text = text.replaceAll('&', '%26');
    window.open('https://wa.me/?text=' + text)

 }
 copyToClip(text:any){
  navigator.clipboard.writeText(text)
 }
 
}
