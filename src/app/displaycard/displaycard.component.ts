import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/Shared/data.service';
import { GlobalHttpService } from 'src/app/services/Shared/global-http.service';

@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.scss']
})
export class DisplaycardComponent implements OnInit {
  @Input() product:any
  

  constructor(private toastr: ToastrService,
    public dataService: DataService,
    public GlobalHttpService: GlobalHttpService) { }

ngOnInit() {
  console.log(this.product)
  
}
}
