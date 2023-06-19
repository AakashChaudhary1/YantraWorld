import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/Shared/data.service';
import { ProductService } from 'src/app/services/Product/product.service';
import { ProductSubCategory } from 'src/app/models/ProductSubCategory';
import { CheckoutService } from 'src/app/services/Checkout/checkout.service';
import { Product } from 'src/app/models/product';
import { Paging } from 'src/app/models/paging';
import { ProductPaginData } from 'src/app/models/product-pagin-data';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/Shared/global.service';
import { GlobalHttpService } from 'src/app/services/Shared/global-http.service';
import { environment } from 'src/environments/environment';
import imageCompression from 'browser-image-compression';
import { Options } from 'html2canvas';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CategoryService } from 'src/app/services/Category/category.service';


@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent implements OnInit {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  SelectedProduct: any;
  customer: Customer = new Customer();

  loading = false;
  submitted = false;
  refId: any;
  totalNewAmount: any;
  user: any;
  categoryList: any;
  filteredCategoryList: any;
  filteredSubCategoryList: any[];
  customerList: any[];
  productId: any;
  product: any;
  searchString: any = '';
  productList: any;
  PRODUCT_COUNT: any;
  public searchText: string;
  public searchModelChanged: Subject<any> = new Subject<any>();
  public searchModelChangeSubscription: Subscription
  newstockProducts: any;
  totalNewStock: any;
  addNew: number;
  productIds: any = [];
  currentUserId: any = 0;
  options: {
    maxSizeMB: number,
    onProgress: Function,
    useWebWorker: boolean,
    signal: AbortSignal,
  }
  productdetails: any
  productPagingObj: any;
  public ProductInsertForm: FormGroup
  updatedproduct: any;
  SubCategoryList: ProductSubCategory[];
  form: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private categoryservice:CategoryService,
    private ProductService: ProductService,
    private checkoutService: CheckoutService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private toastr: ToastrService,
    private router: Router,
    public GlobalHttpService: GlobalHttpService,
    public globalService: GlobalService) {
    // imageCompression(file: File, options: Options): Promise<File>
  }

  ngOnInit() {

    this.selectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'ProductId',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 1
    };
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['id']) {
        this.productId = queryParams['id'];
        this.getProductDetailsById();
      }
      if (queryParams['addNew']) {
        this.addNew = parseInt(queryParams['addNew']);
      }
    })
    this.getNewStockProducts();
    this.searchModelChangeSubscription = this.searchModelChanged
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.searchText = newText.trim();
        console.log(newText);
        this.searchProduct();
      });
    this.searchProduct();
    this.getCategoryList();
    this.getSubCategoryList();
    this.searchCustomer();
    this.user = this.dataService.getUserFromLocalStorage();
    this.currentUserId = parseInt(this.user.customer_id)
    console.log(this.user);
    this.buildForm()

  }

  onItemSelect(item: any) {
    //  1st method//
    // this.productId = item.ProductId
    // this.getProductDetailsById()

    // 2nd method
    this.productId = item.ProductId
    for (let i = 0; i < this.productList.length; i++) {
      const element = this.productList[i];
      if (this.productId == element.ProductId) {
        this.productdetails = element;
        break;
      }
    }
    this.patchProductForm();

  }
  onSelectAll(items: any) {
    console.log(items);
  };
  buildForm() {
    this.ProductInsertForm = this.formBuilder.group({
      name: ['', Validators.required],
      videolink: [''],
      dhc_category: ['0', Validators.required],
      IsActive: ['1', Validators.required],
      tags: [''],
      stock: ['', !this.addNew ? [Validators.required, Validators.min(0)] : Validators.min(1)],
      newstock: ['', this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      SubCategoryId: ['', Validators.required],
      description: ['', Validators.required],
      price: ['1', !this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      landing_rate: ['', [Validators.min(1)]],
      newprice: ['', this.addNew ? [Validators.required, Validators.min(1)] : Validators.min(1)],
      WarrantyInDays: ['90', [Validators.required, Validators.min(0)]],
      image: [null, !this.productId ? Validators.required : null,],
      gender: ['Male', Validators.required]


    })



  }
  get f() { return this.ProductInsertForm.controls; }


  async detectFiles(event) {
    let files = event.target.files[0];
    // console.log(files);
    // this.ProductInsertForm.value.image=files 
    console.log('originalFile instanceof Blob', files instanceof Blob); // true
    console.log(`originalFile size ${files.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(files, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob);
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);

      this.ProductInsertForm.value.image = compressedFile;
    } catch (error) {
      console.log(error);
    }

  }


getSubCategoryList(){
  this.categoryservice.getSubCategories().subscribe((result)=>{
    this.SubCategoryList=result;
  })
}

  getCategoryList() {
    // // this.categoryService.getCategories().subscribe(a => {
    // //   this.categoryList = a;
    // //   this.filteredCategoryList = a;
    // })
  }

  onProductSelect(event) {
    console.log(event)
    this.productId = event.ProductId
    this.getProductDetailsById();
  }

  getProductDetailsById() {
    this.productService.getProductDetailsById(this.productId).subscribe((result) => {
      this.productdetails = result;
      console.log(this.productdetails);
      this.patchProductForm();
    })
  }
  getNewStockProducts() {
    this.productService.getNewStockProducts(this.productId)
      .subscribe(p => {
        this.newstockProducts = p;
        this.totalNewStock = this.globalService.getTotalOfColumn(p, 'newstock') || 0
      })
  }






  patchInventoryProductForm(p) {
    this.product = p;
    this.patchProductForm();
  }
  patchProductForm() {
    this.ProductInsertForm.patchValue({
      name: this.productdetails.Name,
      CategoryId: this.productdetails.CategoryName,
      description: this.productdetails.Description,
      Tags: this.productdetails.Tags,
      newprice: this.productdetails.newprice,
      stock: this.productdetails.stock,
      newstock: this.productdetails.newstock,
      price: this.productdetails.price,
      image: this.productdetails.image,
      videolink: this.productdetails.videolink,
      SubCategoryId: this.productdetails.SubCategoryId,
      landing_rate: this.productdetails.landing_rate


    });
  }

  deleteInventory(product_id) {
    if (confirm('Remove this product from this Inventory?')) {
      this.productService.deleteInventory(product_id)
        .subscribe(res => {
          if (res && res['status'] == 200) {
            this.toastr.success('UnApplied Inventory deleted Successfully!');
          } else {
            this.toastr.warning('Error!', res);
          }
          this.getNewStockProducts();
        })
    }

  }

  applyInventory() {
    if (!this.newstockProducts || !this.newstockProducts.length) return
    this.newstockProducts.forEach(element => {
      this.productIds.push(element.ProductId)
    });
    console.log(this.productIds)
    const data = { product_ids: this.productIds }
    this.productService.applyInventory(data)
      .subscribe(p => {
        if (p) {
          this.toastr.success('Inventory updated Successfully!');
        } else {
          this.toastr.warning('Error!', p);
        }
        this.getNewStockProducts();
      })
  }

  searchCustomer() {
    const data = {
      SearchString: ''
    }
    this.customerList = [];
    this.checkoutService.SearchCustomer(data)
      .subscribe(res => {
        if (res['status'] == 200) {
          this.customerList = res['data'];
        } else {
          // this.toastr.warning('Error!', res['message']);
        }
      })
  }
  onProductSearchFilterChange(event) {
    this.searchText = event;
    this.searchProduct();
  }
  searchProduct() {
    let filterObj: any = {}
    filterObj.DepartmentId = 0,
      filterObj.CategoryId = 0,
      filterObj.SubCategoryId = 0,
      filterObj.PageSize = 100,
      filterObj.ReceivedCount = 0,
      filterObj.CurrentPage = 1,
      filterObj.SearchString = "",
      filterObj.orderBy = null
    this.ProductService.getProductList(filterObj).subscribe((result) => {
      console.log(11111, result);

      this.productList = result.data.Products;
      this.PRODUCT_COUNT = result.data.ProductCount
    });

  }



  onSubmit(): void {
    this.submitted = true;

    if (this.ProductInsertForm.invalid) {
      return;
    }
    // console.log(JSON.stringify(this.ProductInsertForm.value));
    if (this.productId) {
      const data: any = {
        "name": this.ProductInsertForm.value.name,
        "videolink": this.ProductInsertForm.value.videolink,
        "CanSeeRole": this.productdetails.CanSeeRole,
        "CategoryId": this.productdetails.CategoryId,
        "DepartmentId": this.productdetails.DepartmentId,
        "description": this.ProductInsertForm.value.Description,
        "DiscountPercentage": this.ProductInsertForm.value.DiscountPercentage,
        "DisplayPriority": this.ProductInsertForm.value.DisplayPriority,
        "stock": this.ProductInsertForm.value.stock,
        "newstock": this.ProductInsertForm.value.newstock,
        "IsActive": this.ProductInsertForm.value.IsActive,
        "dhc_category": this.ProductInsertForm.value.dhc_category,
        "max_quantity": this.productdetails.max_quantity,
        "min_quantity": this.productdetails.min_quantity,
        "price": this.ProductInsertForm.value.price,
        "landing_rate": this.ProductInsertForm.value.landing_rate,
        "newprice": this.ProductInsertForm.value.newprice,
        "SubCategoryId": this.ProductInsertForm.value.SubCategoryId,
        "Tags": this.ProductInsertForm.value.tags,
        "WarrantyInDays": this.ProductInsertForm.value.WarrantyInDays,
        "alternate_name": this.productdetails.alternate_name,
        "SellerDetail": this.productdetails.SellerDetail,
        "ModelName": this.productdetails.ModelName,
        "product_code": this.productdetails.product_code,
        "product_id": this.productdetails.product_id
      }
      console.log(data);

      this.ProductService.updateProduct(data).subscribe((result) => {
        console.log(result);
        this.toastr.success('Hi!', 'Product saved successfully.')

      })
    }
    else {
      let formdata = new FormData();
      formdata.append('name', this.ProductInsertForm.value.name)
      formdata.append('videolink', this.ProductInsertForm.value.videolink)
      formdata.append('CanSeeRole', '10')
      formdata.append('CategoryId', '1')
      formdata.append('DepartmentId', '1')
      formdata.append('description', this.ProductInsertForm.value.Description)
      formdata.append('DiscountPercentage', '10')
      formdata.append('DisplayPriority', '1')
      formdata.append('stock', this.ProductInsertForm.value.stock)
      formdata.append('newstock', this.ProductInsertForm.value.newstock)
      formdata.append('IsActive', this.ProductInsertForm.value.IsActive)
      formdata.append('dhc_category', '0')
      formdata.append('max_quantity', '100')
      formdata.append('min_quantity', '1')
      formdata.append('price', this.ProductInsertForm.value.price,)
      formdata.append('landing_rate', this.ProductInsertForm.value.landing_rate)
      formdata.append('newprice', this.ProductInsertForm.value.newprice)
      formdata.append('SubCategoryId', this.ProductInsertForm.value.SubCategoryId)
      formdata.append('Tags', this.ProductInsertForm.value.tags)
      formdata.append('WarrantyInDays', this.ProductInsertForm.value.WarrantyInDays)
      formdata.append('alternate_name', this.ProductInsertForm.value.name)
      formdata.append('SellerDetail', '3')
      formdata.append('ModelName', this.ProductInsertForm.value.name)
      formdata.append('product_code', '')
      formdata.append('image', this.ProductInsertForm.value.image)
    
      

     this.ProductService.createProduct(formdata).subscribe((result)=>{
        console.log(result);
        

      })
 }
    
  }

  updateNewInventory(product) {
    let newStock = parseInt(window.prompt('Kitne or peice badhane hai? (type digits only)'));
    if (isNaN(newStock)) return alert('bhai sirf digit daalo');
    let total = product.newstock + newStock;
    if (confirm(product.name + ' ka new stock ' + product.newstock + ' + ' + newStock + ' = ' + total + ' kr dun ?')) {
      product.newstock = total;
      this.product = product
      this.patchProductForm();
      // this.onSubmit();
    }
  }
  updateProduct(data) {
    this.ProductService.updateProduct(data)
      .subscribe(res => {
        this.globalService.hide();
        this.getNewStockProducts();
        if (res['status'] == 200) {
          this.toastr.success('Product updated Successfully!');
        } else {
          this.toastr.warning('Error!', res['message']);
        }
      })
  }
  ngOnDestroy() {
    this.searchModelChangeSubscription.unsubscribe();
  }
}
