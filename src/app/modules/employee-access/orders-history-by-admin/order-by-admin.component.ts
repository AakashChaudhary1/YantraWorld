import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HTML2PDFService } from 'src/app/services/html2pdf.service';
import { MasterService } from 'src/app/services/master.service';
import { DataService } from 'src/app/services/Shared/data.service';
import { GlobalService } from 'src/app/services/Shared/global.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown'

@Component({
  selector: 'app-order-by-admin',
  templateUrl: './order-by-admin.component.html',
  styleUrls: ['./order-by-admin.component.scss']
})

export class OrderByAdminComponent implements OnInit {
  display = false;
  showobj = {}
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  salesmandropdownSettings: any = {};
  user: Customer;
  statusmasterdata: any
  orderList: any = [];
  orderListOriginal: any = [];
  OnLoadFlag: boolean = true;
  Count: any = 1000;
  public searchText: string;
  public searchModelChanged: Subject<string> = new Subject<string>();
  public searchModelChangeSubscription: Subscription
  SelectedUser: any;
  SelectedSalemanUsers: any;
  status: any;
  waNoti: string;
  filterStatus: any = [
    { StatusId: 1, StatusName: "Placed" },
    { StatusId: 2, StatusName: "Confirmed" },
    { StatusId: 5, StatusName: "Delivered & PaymentPending" },
  ];
  total_order_amount_paid: number;
  total_order_amount: number;
  pendingPayment: number;
  pendingAmountForUser: any;
  allowedStatus: any = [5]; // for pending payment calculation
  monthSaleForUser: any = [];
  salemanList: any[][];
  copied: boolean = false;
  SelectedUsersArr: any = []; result: any;
  productId: any;
  productdetails: any;
  customerlist: any;
  SelectedUsers: any = [];
  ProductAndItemList: any[];
  recentorder: any[];
  searchstring: any = '';
  recentorderOrignal: any;
  searchstringoriginal: any;

  constructor(private MasterService: MasterService,
    public OrderService: OrderService,
    public dataService: DataService,

    public globalService: GlobalService) {
    this.filterStatus = this.dataService.getSelectedStatusFromLocalStorage();
  }

  ngOnInit(): void {
    this.user = this.dataService.getUserFromLocalStorage();;
    this.searchCustomer();
    this.searchModelChangeSubscription = this.searchModelChanged
      .pipe(
        debounceTime(800),
        distinctUntilChanged()
      )
      .subscribe(newText => {
        this.searchText = typeof (newText) == "string" ? newText.trim() : '';
        this.searchCustomer();
      });

    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'StatusId',
      textField: 'StatusName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.salesmandropdownSettings = {
      singleSelection: false,
      idField: 'customer_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
    this.statusmaster();
    this.getOrders();
    // this.();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  searchCustomer() {
    let data = {
      SearchString: this.searchText || ''
    }
    this.MasterService.SearchCustomer(data).subscribe((result) => {
      this.customerlist = result['data']
      console.log(this.customerlist);
      this.getcustomerlist(this.customerlist)

    })

  }

  getcustomerlist(status) {
    this.salemanList = []
    for (let i = 0; i < status.length; i++) {
      const element = status[i];
      if (element.Role < 10) {
        this.salemanList.push(element)
      }
    }
  }

  getOrders() {
    let data = {
      count: 1000,
      customer_id: "0",
      status: [],
    }
    this.OrderService.getMostRecentOrdersByCount(data).subscribe((result) => {
      this.recentorder = result['data'];
      this.recentorderOrignal = JSON.parse(JSON.stringify(result['data']));
      console.log(this.recentorder);
    })
  }

  totalunits(units) {
    let sum = 0;
    for (let i = 0; i < units.length; i++) {
      const element = units[i];
      sum = sum + element.units
    }
    return sum
  }

  filterorders() {
    this.recentorder = []
    for (let i = 0; i < this.recentorderOrignal.length; i++) {
      const element = this.recentorderOrignal[i];
      let text = ''
      for (let x in element) {
        text = element[x] + '';
        let lowercase = text.toLocaleLowerCase();
        if (lowercase.indexOf(this.searchstring.toLocaleLowerCase()) > -1) {
          this.recentorder.push(element)
          break
        }
      }
    }
  }

  getPendingPaymentByCustomerId() {
    this.OrderService.getPendingPaymentByCustomerId(this.SelectedUser.customer_id).subscribe(res => {
      if (res['status'] == 200) {
        this.pendingAmountForUser = res['data']['pendingtotalTobePaid'];
        // this.orderList = res['data'];
      }
      this.getMonthSaleByCustomerId()
    });
  };

  getMonthSaleByCustomerId() {
    this.OrderService.getMonthSaleByCustomerId(this.SelectedUser.customer_id).subscribe(res => {
      if (res['status'] == 200) {
        this.monthSaleForUser = res['data'];
        // this.orderList = res['data'];
      }
    });
  };

  getAllPendingPayments() {
    this.OrderService.getPendingPayment().subscribe(res => {
      if (res['status'] == 200) {
        this.pendingPayment = res['data']['pendingtotalTobePaid'];
        // this.orderList = res['data'];

      }
    });
  }

  Remaining(a = 0, b = 0) {
    return Math.round(a - b)
  }

  passwordReset() {
    this.MasterService.passwordReset(this.SelectedUser.customer_id).subscribe(res => {
      alert(res['message']);
      if (res['status'] == 200) {
        this.status = res['data'];
      }
    });
  }
  setupdateOrderQtyByItemID(item) {
    let qty = prompt('kitni quantity set krni hai?')
    if (qty) {
      const data = { 'item_id': item.item_id, 'order_id': item.order_id, 'qty': qty };
      this.OrderService.updateOrderQtyByItemID(data).subscribe(() => {
        this.globalService.hide();
      });
    }
  }

  onChangeStatus(Status, item) {
    // if (confirm(str)) {
    const data = {
      StatusId: Status,
      Statusname: this.status.StatusName,
      item_id: item.item_id,
      order_id: item.order_id,
      saleman_name: this.salemanList
    }
    this.OrderService.updateOrderStatusByItemID(data).subscribe(res => {
      if (res['status'] == 200) {
      } else {
      }
    });
  }

  onCancelCompleteOrder(order) {
    let str = order.cName + 'ji ka complete ' + order.order_id + ' order cancel krna hai? ';
    if (confirm(str)) {
      const data = {
        StatusId: 4,
        Statusname: this.status.StatusName,
        orderId: order.order_id,
        customer_id: this.user.customer_id
      }
      this.OrderService.cancelOrderByOrderID(data).subscribe(res => {
        alert(res['message']);
        this.getOrders();
      });
    }
  }

  filterOrder(e: Event) {
    let str = (e.target as HTMLButtonElement).value;
    this.orderList = this.orderListOriginal;
    if (str.length) {
      this.orderList = this.globalService.filterByValue(this.orderList, str);
    } else {
      this.orderList = this.orderListOriginal;
    }
    // this.orderList.filter(o => Object.keys(o).some(k => o[k] && o[k].toString().toLowerCase().includes(str.toLowerCase())))
    console.log(this.orderList)
  }

  salemanSelected() {
    this.ProductAndItemList = [];
    let productsById = {};
    this.orderList.forEach(order => {
      order.order_details.forEach(element => {
        if ([1, 2, 6].indexOf(element.status) > -1 && !element.assigned_bag_saleman) {
          if (productsById[element.product_id]) {
            // productsById[element.product_id]['saleman'] = this.SelectedSaleman;
            productsById[element.product_id]['total_units'] += element.units;
            productsById[element.product_id]['item_ids'].push(element.item_id);
          } else {
            productsById[element.product_id] = {
              product_id: element.product_id,
              item_ids: [element.item_id],
              total_units: element.units,
              name: element.name,
            }
          }
        }
      });
    });
    this.ProductAndItemList = Object.keys(productsById).map((key) => productsById[key]);
  }

  createSelectedUserArray() {
    this.SelectedUsersArr = [];
    this.SelectedUsers.forEach(element => {
      this.SelectedUsersArr.push(element.customer_id)
    });
  }

  filterOrdersbyCustomer() {
    this.orderList = [];
    this.createSelectedUserArray();
    this.orderListOriginal.filter((element) => {
      if (this.SelectedUsersArr.indexOf(element.customer_id) > -1 && !element.assigned_bag_saleman) {
        this.orderList.push(element)
      }
    });
    this.orderList = this.SelectedUsersArr.length ? this.orderList : this.orderListOriginal;
    // this.salemanSelected();
  }

  statusmaster() {
    this.MasterService.getStatusMaster().subscribe((result) => {
      this.statusmasterdata = result['data']
      console.log(this.statusmasterdata);
    })
  }
}