"use strict";(self.webpackChunkYantraWorld=self.webpackChunkYantraWorld||[]).push([[220],{3220:(pt,_,d)=>{d.r(_),d.d(_,{salemanModule:()=>ht});var u=d(8781),m=d(1669),h=d(8372),p=d(1884),b=d(7579),t=d(1571),S=d(3835),f=d(8132),A=d(4417),x=d(4852),c=d(6895),l=d(433),Z=d(4339);function C(s,n){if(1&s&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&s){const e=n.$implicit,i=t.oxw().$implicit;t.Q6J("selected",i.item_status==e.StatusId)("ngValue",e.StatusId),t.xp6(1),t.hij(" ",e.StatusName,"")}}function y(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.TgZ(7,"i",22),t.NdJ("click",function(){const a=t.CHM(e).$implicit,o=t.oxw(4);return t.KtG(o.setupdateOrderQtyByItemID(a))}),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"select",23),t.NdJ("ngModelChange",function(r){const o=t.CHM(e).$implicit;return t.KtG(o.item_status=r)})("ngModelChange",function(r){const o=t.CHM(e).$implicit,g=t.oxw(4);return t.KtG(g.onChangeStatus(r,o))}),t.YNc(12,C,2,3,"option",24),t.qZA()()()}if(2&s){const e=n.$implicit,i=t.oxw(4);t.xp6(2),t.Oqu(e.item_id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.units," "),t.xp6(3),t.Oqu(e.unit_cost),t.xp6(2),t.Q6J("ngModel",e.item_status),t.xp6(1),t.Q6J("ngForOf",i.status)}}function U(s,n){if(1&s&&(t.TgZ(0,"td",20),t._uU(1),t.TgZ(2,"table",21)(3,"thead",7)(4,"tr")(5,"th",8),t._uU(6,"Item Id"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",8),t._uU(10,"Units"),t.qZA(),t.TgZ(11,"th",8),t._uU(12,"Rate"),t.qZA(),t.TgZ(13,"th",8),t._uU(14,"status"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,y,13,6,"tr",9),t.qZA()()()),2&s){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.AsE(" ",e.order_details.length," Item ke ",i.globalService.getTotalOfColumn(e.order_details,"units")," units "),t.xp6(15),t.Q6J("ngForOf",e.order_details)}}function I(s,n){if(1&s&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.hij(" Cant assign because its assigned to ",e.assigned_bag_saleman," ")}}const B=function(s){return[s]};function L(s,n){if(1&s&&(t.TgZ(0,"tr")(1,"td",14)(2,"a",15),t._uU(3),t.qZA(),t._UZ(4,"br")(5,"br"),t.TgZ(6,"a",16),t._uU(7),t._UZ(8,"i",17),t.qZA(),t._UZ(9,"br"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.YNc(12,U,17,3,"td",18),t.YNc(13,I,2,1,"td",19),t.qZA()),2&s){const e=n.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(10,B,"/emp-access/order-detail/"+e.order_id)),t.xp6(1),t.hij("",e.order_id," "),t.xp6(3),t.MGl("href","tel:",e.mob_phone,"",t.LSH),t.xp6(1),t.hij("",e.cName," "),t.xp6(3),t.hij("",t.xi3(11,7,e.created_on,"medium")," "),t.xp6(2),t.Q6J("ngIf",e.order_details.length&&e.assigned_bag_saleman==i.SelectedSaleman),t.xp6(1),t.Q6J("ngIf",e.assigned_bag_saleman!=i.SelectedSaleman)}}function O(s,n){if(1&s&&(t.TgZ(0,"table",6)(1,"thead",7)(2,"tr")(3,"th",8),t._uU(4,"Order Id"),t.qZA(),t.TgZ(5,"th",8),t._uU(6,"items"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,L,14,12,"tr",9),t.qZA()()),2&s){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.orderList)}}function q(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw();return t.KtG(a.updateBagInitQtyByBagID(r.bag_id))}),t.qZA()}}function M(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"td",14)(1,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,a=t.oxw();return t.KtG(a.returnBagItem(r))}),t._uU(2),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("disabled",e.bag_initial_quantity==e.bag_delivered_quantity+e.return_units),t.xp6(1),t.Oqu(e.bag_initial_quantity==e.bag_delivered_quantity+e.return_units?"Success":"Return")}}function w(s,n){if(1&s&&(t.TgZ(0,"tr")(1,"td",14)(2,"a",26),t._uU(3),t.qZA()(),t.TgZ(4,"td",14),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.YNc(8,q,1,0,"i",27),t.qZA(),t.TgZ(9,"td",14),t._uU(10),t.qZA(),t.TgZ(11,"td",14),t._uU(12),t.qZA(),t.TgZ(13,"td",14),t._uU(14),t.qZA(),t.YNc(15,M,3,2,"td",19),t.qZA()),2&s){const e=n.$implicit,i=t.oxw();t.xp6(3),t.hij("",e.bag_id," "),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij("",e.bag_initial_quantity," "),t.xp6(1),t.Q6J("ngIf",!e.is_handover),t.xp6(2),t.hij(" ",e.bag_delivered_quantity," "),t.xp6(2),t.hij(" ",e.return_units," "),t.xp6(2),t.hij(" ",e.bag_item_ids," "),t.xp6(1),t.Q6J("ngIf",i.user&&i.user.Role<=6)}}function N(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.archievedBags())}),t._uU(1,"Archieved bag"),t.qZA()}}function F(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.handoverBagsToSaleman())}),t._uU(1,"handover Bag To Saleman"),t.qZA()}}function J(s,n){if(1&s&&(t.TgZ(0,"td",14),t._uU(1),t.ALo(2,"date"),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.created_on,"medium")," ")}}function P(s,n){if(1&s&&(t.TgZ(0,"tr")(1,"td",14)(2,"a",26),t._uU(3),t.qZA()(),t.TgZ(4,"td",14),t._uU(5),t.qZA(),t.TgZ(6,"td",14),t._uU(7),t.qZA(),t.TgZ(8,"td",14),t._uU(9),t.qZA(),t.YNc(10,J,3,4,"td",19),t.qZA()),2&s){const e=n.$implicit,i=t.oxw(2);t.xp6(3),t.hij("",e.bag_id," "),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.bag_initial_quantity-e.bag_delivered_quantity-e.return_units," "),t.xp6(2),t.hij(" ",e.bag_item_ids," "),t.xp6(1),t.Q6J("ngIf",i.user&&i.user.Role<=6)}}function Q(s,n){if(1&s&&(t.TgZ(0,"div",0)(1,"div",31)(2,"div",3)(3,"table",6)(4,"thead",7)(5,"tr")(6,"th",8),t._uU(7,"Bag Id"),t.qZA(),t.TgZ(8,"th",8),t._uU(9,"Product Name"),t.qZA(),t.TgZ(10,"th",8),t._uU(11,"Pending Qty"),t.qZA(),t.TgZ(12,"th",8),t._uU(13,"order item ids"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"Created On"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,P,11,5,"tr",9),t.qZA()()()()()),2&s){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.pendingItemTobeReturn)}}let k=(()=>{class s{constructor(e,i,r,a,o){this.MasterService=e,this.OrderService=i,this.dataService=r,this.route=a,this.globalService=o,this.orderList=[],this.orderListOriginal=[],this.Count=1e3,this.searchModelChanged=new b.x,this.SelectedUsers=[],this.customerList=[],this.filterStatus=[{StatusId:1,StatusName:"Placed"},{StatusId:2,StatusName:"Confirmed"},{StatusId:5,StatusName:"Delivered & PaymentPending"},{StatusId:6,StatusName:"Paid & DeliveryPending"}],this.allowedStatus=[5],this.SelectedUsersArr=[],this.dropdownList=[],this.selectedItems=[],this.dropdownSettings={},this.customerListDropdownSettings={},this.showItems={},this.route.params.subscribe(g=>{this.SelectedSaleman=g.id})}ngOnInit(){this.user=this.dataService.getUserFromLocalStorage(),this.getOrders(),this.getStatusMaster(),this.searchCustomer(),this.getBagBySalemanId(),this.getpendingItemTobeReturn(),this.searchModelChangeSubscription=this.searchModelChanged.pipe((0,h.b)(800),(0,p.x)()).subscribe(e=>{this.searchText=e.trim(),console.log(e),this.searchCustomer()}),this.dropdownSettings={singleSelection:!1,idField:"StatusId",textField:"StatusName",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:4,allowSearchFilter:!0},this.customerListDropdownSettings={singleSelection:!1,idField:"customer_id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:30,allowSearchFilter:!0}}searchCustomer(){const e={SearchString:this.searchText||""};this.customerList=[],this.MasterService.SearchCustomer(e).subscribe(i=>{200==i.status&&(this.customerList=i.data)})}createSelectedUserArray(){this.SelectedUsersArr=[],this.SelectedUsers.forEach(e=>{this.SelectedUsersArr.push(e.customer_id)})}filterOrdersbyCustomer(){this.orderList=[],this.createSelectedUserArray(),this.orderListOriginal.filter(e=>{this.SelectedUsersArr.indexOf(e.customer_id)>-1&&this.orderList.push(e)}),this.orderList=this.SelectedUsersArr.length?this.orderList:this.orderListOriginal,this.salemanSelected()}getOrders(){this.OrderService.getMostRecentOrdersByCount({count:this.Count||500,customer_id:"0",saleman_id:this.SelectedSaleman,status:[]}).subscribe(r=>{200==r.status&&(this.orderListOriginal=r.data,this.orderList=r.data,this.pendingAmountForUser=0,this.SelectedUsersArr.length&&this.filterOrdersbyCustomer(),this.salemanSelected())})}getPendingAmountForUser(){let e=0,i=0;this.orderListOriginal.forEach(r=>{this.allowedStatus.indexOf(r.status)>-1&&(e+=r.pAmount||0,i+=this.globalService.getTotalOfNonCancelledOrderWithDeliveryCharges(r.order_details,"units","unit_cost")||0)}),this.pendingAmountForUser=Math.round(i-e)}getAllPendingPayments(){this.OrderService.getPendingPayment().subscribe(e=>{200==e.status&&(this.total_order_amount_paid=this.globalService.getTotalOfColumn(e.data,"TotalPaid")||0,this.total_order_amount=this.globalService.getTotalOfNonCancelledOrderWithDeliveryCharges(e.data,"units","unit_cost")||0,this.pendingPayment=Math.round(this.total_order_amount-this.total_order_amount_paid))})}Remaining(e=0,i=0){return Math.round(e-i)}getStatusMaster(){this.MasterService.getStatusMaster().subscribe(e=>{200==e.status&&(this.status=e.data)})}returnBagItem(e){let i=prompt("Kitni unit return ki hai?");this.OrderService.returnBag({bag_id:e.bag_id,product_id:e.product_id,return_units:i||0,saleman:this.SelectedSaleman}).subscribe(a=>{alert(a.message),this.getBagBySalemanId()})}archievedBags(){this.user=this.dataService.getUserFromLocalStorage(),this.OrderService.archievedBags({bag_ids:this.bagIds,saleman:this.SelectedSaleman}).subscribe(r=>{200==r.status&&(alert(r.message),this.getOrders(),this.getpendingItemTobeReturn())})}handoverBagsToSaleman(){this.user=this.dataService.getUserFromLocalStorage(),this.OrderService.handoverBagsToSaleman({bag_ids:this.bagIds,saleman:this.SelectedSaleman}).subscribe(r=>{200==r.status&&(alert(r.message),this.getOrders(),this.getpendingItemTobeReturn())})}setupdateOrderQtyByItemID(e){let i=prompt("kitni quantity set krni hai?");i&&this.OrderService.updateOrderQtyByItemID({item_id:e.item_id,order_id:e.order_id,qty:i}).subscribe(a=>{this.globalService.hide()})}updateBagInitQtyByBagID(e){let i=prompt("kitni quantity set krni hai?");i&&this.OrderService.updateBagInitQtyByBagID({bag_id:e,qty:i}).subscribe(a=>{this.globalService.hide(),200==a.status&&this.getOrders()})}getBagBySalemanId(){this.MasterService.getbagBySalemanId(this.SelectedSaleman).subscribe(e=>{200==e.status&&(this.bagOrderListOriginal=e.data,this.bagOrderList=e.data,this.bagIds=this.globalService.getArrayofOneColumnOfArrOfObj(this.bagOrderList,"bag_id"))})}getpendingItemTobeReturn(){this.MasterService.getpendingItemTobeReturn(this.SelectedSaleman).subscribe(e=>{200==e.status&&(this.pendingItemTobeReturn=e.data)})}onChangeStatus(e,i){confirm(i.cName+'ji ka "'+i.units+" "+i.name+'" ka status change karna hai? Amount: Rs. '+i.units*i.unit_cost+"?")&&this.OrderService.updateOrderStatusByItemID({StatusId:e,item_id:i.item_id,order_id:i.order_id}).subscribe(o=>{alert(o.message),this.getOrders()})}filterOrder(e){this.orderList=this.orderListOriginal,this.orderList=e.length?this.globalService.filterByValue(this.orderList,e):this.orderListOriginal,console.log(this.orderList)}onItemSelect(e){console.log(e)}onSelectAll(e){console.log(e)}salemanSelected(){this.ProductAndItemList=[];let e={};this.orderList.forEach(i=>{[1,2,6].indexOf(i.status)>-1&&(e[i.product_id]?(e[i.product_id].total_units=i.units,e[i.product_id].item_ids.push(i.item_id)):e[i.product_id]={product_id:i.product_id,item_ids:[i.item_id],total_units:i.units,name:i.name})}),this.ProductAndItemList=Object.keys(e).map(i=>e[i])}SubmitBag(){this.user=this.dataService.getUserFromLocalStorage(),this.OrderService.SubmitBag({bag:this.ProductAndItemList,notes:this.notes||"",saleman:this.SelectedSaleman.customer_id}).subscribe(i=>{})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(S.m),t.Y36(f.p),t.Y36(A.D),t.Y36(u.gz),t.Y36(x.U))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-bag-update"]],decls:49,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-12","text-center"],[1,"col-md-12","table-responsive-sm","max-h-table"],[1,"text-center"],["class","table  text-center ",4,"ngIf"],[1,"table","text-center"],[1,"pink-text"],["scope","col"],[4,"ngFor","ngForOf"],[1,"clearfix"],["class","btn btn-success pull-left",3,"click",4,"ngIf"],["class","btn btn-primary float-end",3,"click",4,"ngIf"],["class","container",4,"ngIf"],[1,"td-text-mid"],["href","javascript:void(0)",1,"text-primary","font-weight-bold",3,"routerLink"],[3,"href"],["aria-hidden","true",1,"fa","fa-phone","text-success"],["class","text",4,"ngIf"],["class","td-text-mid",4,"ngIf"],[1,"text"],[1,"table","bg-light","rounded"],["title","update quantity","aria-hidden","true",1,"fa","fa-edit","cursor-p",3,"click"],["ngClass","{'border-danger': item.item_status == '5','border-success': item.item_status == '6', 'border-dark': [3, 4].indexOf(item.item_status) > -1}","name","userId",1,"form-control","mw-200",3,"ngModel","ngModelChange"],[3,"selected","ngValue",4,"ngFor","ngForOf"],[3,"selected","ngValue"],["href","javascript:void(0)",1,"text-primary","font-weight-bold"],["class","fa fa-edit  cursor-p","title","update quantity","aria-hidden","true",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-secondary",3,"disabled","click"],[1,"btn","btn-success","pull-left",3,"click"],[1,"btn","btn-primary","float-end",3,"click"],[1,"row","text-center"]],template:function(e,i){1&e&&(t._UZ(0,"app-header")(1,"br"),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"h2")(6,"u"),t._uU(7,"Bag Management"),t.qZA()()(),t.TgZ(8,"div",3)(9,"h4",4)(10,"strong")(11,"u"),t._uU(12,"Current Assigned Orders"),t.qZA()()(),t.YNc(13,O,9,1,"table",5),t.qZA()(),t._UZ(14,"br")(15,"br"),t.TgZ(16,"h4",4)(17,"strong")(18,"u"),t._uU(19,"Current Bag"),t.qZA()()(),t.TgZ(20,"div",1)(21,"div",3)(22,"table",6)(23,"thead",7)(24,"tr")(25,"th",8),t._uU(26,"Bag Item Id"),t.qZA(),t.TgZ(27,"th",8),t._uU(28,"Product Name"),t.qZA(),t.TgZ(29,"th",8),t._uU(30,"Initial Qty"),t.qZA(),t.TgZ(31,"th",8),t._uU(32,"Delivered Qty"),t.qZA(),t.TgZ(33,"th",8),t._uU(34,"Returned Qty"),t.qZA(),t.TgZ(35,"th",8),t._uU(36,"order item ids"),t.qZA()()(),t.TgZ(37,"tbody"),t.YNc(38,w,16,8,"tr",9),t._UZ(39,"tr"),t.qZA()()(),t.TgZ(40,"div",10),t.YNc(41,N,2,0,"button",11),t.YNc(42,F,2,0,"button",12),t.qZA()()(),t._UZ(43,"hr"),t.TgZ(44,"h4",4)(45,"strong")(46,"u"),t._uU(47),t.qZA()()(),t.YNc(48,Q,18,1,"div",13)),2&e&&(t.xp6(13),t.Q6J("ngIf",i.SelectedSaleman),t.xp6(25),t.Q6J("ngForOf",i.bagOrderList),t.xp6(3),t.Q6J("ngIf",i.bagOrderList&&i.bagOrderList.length),t.xp6(1),t.Q6J("ngIf",i.bagOrderList&&i.bagOrderList.length),t.xp6(5),t.hij(" ",i.pendingItemTobeReturn&&i.pendingItemTobeReturn.length?"Pending Bag items":"All items returned"," "),t.xp6(1),t.Q6J("ngIf",i.pendingItemTobeReturn&&i.pendingItemTobeReturn.length))},dependencies:[u.yS,c.mk,c.sg,c.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,Z.P,c.uU]}),s})();var j=d(5607),T=d(324);function Y(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",17)(1,"label",18),t._uU(2,"Select Saleman: "),t.qZA(),t.TgZ(3,"ng-multiselect-dropdown",28),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw(2);return t.KtG(a.SelectedUsers=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.filterOrdersbyCustomer())}),t.qZA()()}if(2&s){const e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.SelectedUsers)("placeholder","Select Saleman to assign orders")("settings",e.salemanListDropdownSettings)("data",e.salemanList)}}function D(s,n){if(1&s&&(t.TgZ(0,"div",26),t.YNc(1,Y,4,4,"div",27),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.customerList&&e.customerList.length)}}function R(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",17)(1,"label",18),t._uU(2,"Select Retailer: "),t.qZA(),t.TgZ(3,"ng-multiselect-dropdown",28),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw(2);return t.KtG(a.SelectedUsers=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.filterOrdersbyCustomer())}),t.qZA()()}if(2&s){const e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.SelectedUsers)("placeholder","Select Retailer for orderlist")("settings",e.customerListDropdownSettings)("data",e.customerList)}}function E(s,n){if(1&s&&(t.TgZ(0,"div",26),t.YNc(1,R,4,4,"div",27),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.customerList&&e.customerList.length)}}function K(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",17)(2,"label",18),t._uU(3,"Filter: "),t.qZA(),t.TgZ(4,"ng-multiselect-dropdown",29),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw();return t.KtG(a.filterStatus=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.getOrders())}),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(4),t.Q6J("disabled",!0)("ngModel",e.filterStatus)("settings",e.dropdownSettings)("data",e.status)}}function $(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.SubmitBag())}),t._uU(1," Add to bag"),t.qZA()}}function G(s,n){if(1&s&&(t.TgZ(0,"div",30)(1,"h6"),t._uU(2),t.qZA(),t.YNc(3,$,2,0,"button",31),t.qZA()),2&s){const e=t.oxw();t.xp6(2),t.lnq("Assign ",e.SelectedUsers.length?e.SelectedUsers.length:"all these "," customers ke ",e.orderList.length," orders to ",e.SelectedSaleman.name," salesman"),t.xp6(1),t.Q6J("ngIf",e.ProductAndItemList&&e.ProductAndItemList.length)}}const v=function(s){return[s]};function H(s,n){if(1&s&&(t.TgZ(0,"button",34),t._uU(1),t._UZ(2,"i",35),t.qZA()),2&s){const e=t.oxw(2);t.Q6J("routerLink",t.VKq(2,v,"/emp-access/saleman/edit-bag/"+e.SelectedSaleman.customer_id)),t.xp6(1),t.hij(" See ",e.SelectedSaleman.name,"'s bag ")}}function V(s,n){if(1&s&&(t.TgZ(0,"div",30),t.YNc(1,H,3,4,"button",33),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.SelectedSaleman)}}function z(s,n){if(1&s&&(t.TgZ(0,"option",47),t._uU(1),t.qZA()),2&s){const e=n.$implicit,i=t.oxw().$implicit;t.Q6J("selected",i.item_status==e.StatusId)("ngValue",e.StatusId),t.xp6(1),t.hij(" ",e.StatusName,"")}}const W=function(){return[3,4]},X=function(s,n,e){return{"border-danger":s,"border-success":n,"border-dark":e}};function tt(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.TgZ(7,"i",44),t.NdJ("click",function(){const a=t.CHM(e).$implicit,o=t.oxw(4);return t.KtG(o.setupdateOrderQtyByItemID(a))}),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"select",45),t.NdJ("ngModelChange",function(r){const o=t.CHM(e).$implicit;return t.KtG(o.item_status=r)})("ngModelChange",function(r){const o=t.CHM(e).$implicit,g=t.oxw(4);return t.KtG(g.onChangeStatus(r,o))}),t.YNc(12,z,2,3,"option",46),t.qZA()()()}if(2&s){const e=n.$implicit,i=t.oxw(4);t.xp6(2),t.Oqu(e.item_id),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.units," "),t.xp6(3),t.Oqu(e.unit_cost),t.xp6(2),t.Q6J("ngModel",e.item_status)("ngClass",t.kEZ(8,X,"5"==e.item_status,"6"==e.item_status,t.DdM(7,W).indexOf(e.item_status)>-1)),t.xp6(1),t.Q6J("ngForOf",i.status)}}function et(s,n){if(1&s&&(t.TgZ(0,"td",42),t._uU(1),t.TgZ(2,"table",43)(3,"thead",11)(4,"tr")(5,"th",12),t._uU(6,"Item Id"),t.qZA(),t.TgZ(7,"th",12),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",12),t._uU(10,"Units"),t.qZA(),t.TgZ(11,"th",12),t._uU(12,"Rate"),t.qZA(),t.TgZ(13,"th",12),t._uU(14,"status"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,tt,13,12,"tr",13),t.qZA()()()),2&s){const e=t.oxw().$implicit,i=t.oxw(2);t.xp6(1),t.AsE(" ",e.order_details.length," Item ke ",i.globalService.getTotalOfColumn(e.order_details,"units")," units already Assigned hai ye isi saleman ko "),t.xp6(15),t.Q6J("ngForOf",e.order_details)}}function it(s,n){if(1&s&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.hij(" Cant assign because its assigned to Id: ",e.assigned_bag_saleman," saleman ")}}function st(s,n){if(1&s&&(t.TgZ(0,"tr")(1,"td",36)(2,"a",37),t._uU(3),t.qZA(),t._UZ(4,"br")(5,"br"),t.TgZ(6,"a",38),t._uU(7),t._UZ(8,"i",39),t.qZA(),t._UZ(9,"br"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.YNc(12,et,17,3,"td",40),t.YNc(13,it,2,1,"td",41),t.qZA()),2&s){const e=n.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(10,v,"/emp-access/order-detail/"+e.order_id)),t.xp6(1),t.hij("",e.order_id," "),t.xp6(3),t.MGl("href","tel:",e.mob_phone,"",t.LSH),t.xp6(1),t.hij("",e.cName," "),t.xp6(3),t.hij("",t.xi3(11,7,e.created_on,"medium")," "),t.xp6(2),t.Q6J("ngIf",e.order_details.length&&(e.assigned_bag_saleman==i.SelectedSaleman.customer_id||!e.assigned_bag_saleman)),t.xp6(1),t.Q6J("ngIf",e.assigned_bag_saleman&&e.assigned_bag_saleman!=i.SelectedSaleman.customer_id)}}function rt(s,n){if(1&s&&(t.TgZ(0,"div",9)(1,"table",10)(2,"thead",11)(3,"tr")(4,"th",12),t._uU(5,"Order Id"),t.qZA(),t.TgZ(6,"th",12),t._uU(7,"items"),t.qZA()()(),t.TgZ(8,"tbody"),t.YNc(9,st,14,12,"tr",13),t.qZA()()()),2&s){const e=t.oxw();t.xp6(9),t.Q6J("ngForOf",e.orderList)}}function nt(s,n){1&s&&(t.TgZ(0,"h4",6)(1,"strong")(2,"u"),t._uU(3,"Please select a saleman"),t.qZA()()())}function at(s,n){if(1&s&&(t.TgZ(0,"h5",6)(1,"strong")(2,"u"),t._uU(3),t.qZA()()()),2&s){const e=t.oxw();t.xp6(3),t.AsE("",e.ProductAndItemList.length," Products ke ",e.globalService.getTotalOfColumn(e.ProductAndItemList,"total_units")," units dedo.")}}function ot(s,n){1&s&&(t.TgZ(0,"h5",6)(1,"strong")(2,"u"),t._uU(3,"Products Delivery nhi hai abhi in Retailers ki."),t.qZA()()())}function dt(s,n){if(1&s&&(t.TgZ(0,"tr")(1,"td",36)(2,"a",48),t._uU(3),t.qZA()(),t.TgZ(4,"td",36),t._uU(5),t.qZA(),t.TgZ(6,"td",36),t._uU(7),t.qZA(),t.TgZ(8,"td",36),t._uU(9),t.qZA()()),2&s){const e=n.$implicit;t.xp6(3),t.hij("",e.product_id," "),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.total_units," "),t.xp6(2),t.hij(" ",e.item_ids," ")}}function lt(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",17)(1,"label",18),t._uU(2,"Assign quantity: "),t.qZA(),t.TgZ(3,"input",49),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw();return t.KtG(a.spareQty=r)}),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.spareQty)}}function ct(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"div",17)(1,"label",18),t._uU(2,"Any Notes: "),t.qZA(),t.TgZ(3,"input",49),t.NdJ("ngModelChange",function(r){t.CHM(e);const a=t.oxw();return t.KtG(a.notes=r)}),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.notes)}}const gt=[{path:"admin-create-bag",canActivate:[m.B],component:(()=>{class s{constructor(e,i,r,a){this.MasterService=e,this.OrderService=i,this.dataService=r,this.globalService=a,this.orderList=[],this.orderListOriginal=[],this.Count=1e3,this.bagItemCount=0,this.searchModelChanged=new b.x,this.SelectedUsers=[],this.customerList=[],this.filterStatus=[{StatusId:1,StatusName:"Placed"},{StatusId:2,StatusName:"Confirmed"},{StatusId:6,StatusName:"Paid & DeliveryPending"}],this.allowedStatus=[5],this.SelectedUsersArr=[],this.OnLoadFlag=!0,this.salemanListDropdownSettings={singleSelection:!1,idField:"customer_id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:2,allowSearchFilter:!0},this.dropdownList=[],this.selectedItems=[],this.dropdownSettings={},this.customerListDropdownSettings={},this.productListDropdownSettings={},this.SalemanListDropdownSettings={},this.showItems={}}ngOnInit(){this.user=this.dataService.getUserFromLocalStorage(),this.dataService.bagCount.subscribe(e=>this.bagItemCount=e),this.getOrders(),this.getStatusMaster(),this.searchCustomer(),this.searchSaleman(),this.searchProducts(),this.searchModelChangeSubscription=this.searchModelChanged.pipe((0,h.b)(800),(0,p.x)()).subscribe(e=>{let i=e.split("/");this.searchText=i[0].trim(),"customer"==i[1]?this.searchCustomer():"products"==i[1]&&this.searchProducts()}),this.dropdownSettings={singleSelection:!1,idField:"StatusId",textField:"StatusName",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:4,allowSearchFilter:!0},this.customerListDropdownSettings={singleSelection:!1,idField:"customer_id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:2,allowSearchFilter:!0},this.SalemanListDropdownSettings={singleSelection:!1,idField:"customer_id",textField:"name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:30,allowSearchFilter:!0},this.productListDropdownSettings={singleSelection:!1,idField:"product_id",textField:"Name",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:100,allowSearchFilter:!0}}onChangeSelectedUser(e){this.SelectedSaleman=e,this.getorderByCustomerId()}searchCustomer(){const e={SearchString:this.searchText||"",CustomerRole:[10]};this.customerList=[],this.MasterService.SearchCustomer(e).subscribe(i=>{200==i.status&&(this.customerList=i.data,this.OnLoadFlag&&([this.customerList,this.salemanList]=this.globalService.filterCustomerAndEmployeesbyRole(i.data,[7,8,9]),this.OnLoadFlag=!1))})}searchSaleman(){const e={SearchString:this.searchText||"",CustomerRole:[8]};this.salemanList=[],this.MasterService.SearchCustomer(e).subscribe(i=>{200==i.status&&(this.salemanList=i.data)})}saveSpareProductinBag(e,i,r){this.OrderService.updateSpareProductInBag({product_id:i.ProductId,total_units:e,notes:r||"",saleman:this.SelectedSaleman.customer_id||this.user.customer_id}).subscribe(o=>{200==o.status&&alert(o.message)})}setupdateOrderQtyByItemID(e){let i=prompt("kitni quantity set krni hai?");i&&this.OrderService.updateOrderQtyByItemID({item_id:e.item_id,order_id:e.order_id,qty:i}).subscribe(a=>{this.globalService.hide()})}searchProducts(){let e=new j.P;e.DepartmentId=0,e.CategoryId=0,e.SubCategoryId=0,e.PageSize=500,e.PageNumber=0,e.CurrentPage=1,e.SearchString=this.searchText,this.MasterService.getProductList(e).subscribe(i=>{200==i.status&&(this.productList=i.data.Products)})}createSelectedUserArray(){this.SelectedUsersArr=[],this.SelectedUsers.forEach(e=>{this.SelectedUsersArr.push(e.customer_id)})}filterOrdersbyCustomer(){this.orderList=[],this.createSelectedUserArray(),this.orderListOriginal.filter(e=>{this.SelectedUsersArr.indexOf(e.customer_id)>-1&&!e.assigned_bag_saleman&&this.orderList.push(e)}),this.orderList=this.SelectedUsersArr.length?this.orderList:this.orderListOriginal,this.salemanSelected()}getOrders(){let e=[];this.filterStatus.length&&this.filterStatus.forEach(r=>{e.push(r.StatusId)}),this.dataService.setSelectedStatusInLocalStorage(this.filterStatus),this.OrderService.getMostRecentOrdersByCount({count:this.Count||500,customer_id:"0",status:e}).subscribe(r=>{200==r.status&&(this.orderListOriginal=r.data,this.orderList=r.data,this.pendingAmountForUser=0,this.SelectedUsersArr.length&&this.filterOrdersbyCustomer())})}getPendingAmountForUser(){let e=0,i=0;this.orderListOriginal.forEach(r=>{this.allowedStatus.indexOf(r.status)>-1&&(e+=r.pAmount||0,i+=this.globalService.getTotalOfNonCancelledOrderWithDeliveryCharges(r.order_details,"units","unit_cost")||0)}),this.pendingAmountForUser=Math.round(i-e)}getAllPendingPayments(){this.OrderService.getPendingPayment().subscribe(e=>{200==e.status&&(this.total_order_amount_paid=this.globalService.getTotalOfColumn(e.data,"TotalPaid")||0,this.total_order_amount=this.globalService.getTotalOfNonCancelledOrderWithDeliveryCharges(e.data,"units","unit_cost")||0,this.pendingPayment=Math.round(this.total_order_amount-this.total_order_amount_paid))})}Remaining(e=0,i=0){return Math.round(e-i)}getStatusMaster(){this.MasterService.getStatusMaster().subscribe(e=>{200==e.status&&(this.status=e.data)})}getorderByCustomerId(){this.MasterService.getorderByCustomerId(this.SelectedSaleman.customer_id).subscribe(e=>{200==e.status&&(this.orderListOriginal=e.data,this.orderList=e.data)})}onChangeStatus(e,i){confirm(i.cName+'ji ka "'+i.units+" "+i.name+'" ka status change karna hai? Amount: Rs. '+i.units*i.unit_cost+"?")&&this.OrderService.updateOrderStatusByItemID({StatusId:e,item_id:i.item_id,order_id:i.order_id}).subscribe(o=>{alert(o.message),this.getOrders()})}filterOrder(e){this.orderList=this.orderListOriginal,this.orderList=e.length?this.globalService.filterByValue(this.orderList,e):this.orderListOriginal,console.log(this.orderList)}onItemSelect(e){console.log(e)}onSelectAll(e){console.log(e)}salemanSelected(){this.ProductAndItemList=[];let e={};this.orderList.forEach(i=>{i.order_details.forEach(r=>{[1,2,6].indexOf(r.status)>-1&&!r.assigned_bag_saleman&&(e[r.product_id]?(e[r.product_id].total_units+=r.units,e[r.product_id].item_ids.push(r.item_id)):e[r.product_id]={product_id:r.product_id,item_ids:[r.item_id],total_units:r.units,name:r.name})})}),this.ProductAndItemList=Object.keys(e).map(i=>e[i])}SubmitBag(){this.user=this.dataService.getUserFromLocalStorage(),this.OrderService.SubmitBag({bag:this.ProductAndItemList,notes:this.notes||"",saleman:this.SelectedSaleman.customer_id}).subscribe(r=>{200==r.status&&(alert(r.message),this.getOrders())})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(S.m),t.Y36(f.p),t.Y36(A.D),t.Y36(x.U))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-create-bag-by-admin"]],decls:60,vars:16,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-xs-12","text-center","mb-5"],["class","col-md-4",4,"ngIf"],["class","input-group mb-3 col-md-3",4,"ngIf"],["class","col-md-12 table-responsive-sm max-h-table",4,"ngIf"],[1,"text-center"],["class","text-center",4,"ngIf"],[1,"row","text-center"],[1,"col-md-12","table-responsive-sm","max-h-table"],[1,"table","text-center"],[1,"pink-text"],["scope","col"],[4,"ngFor","ngForOf"],[2,"border-top","2px dashed red"],[1,"container"],[1,"col-sm-5"],[1,"form-group"],["for","userId",1,"text-uppercase","fw-bold"],[1,"w-100",3,"ngModel","settings","data","ngModelChange"],[1,"col-md-2"],["class","form-group",4,"ngIf"],[1,"col-md-5"],[1,"form-check"],["title","add in saleman's bag",1,"btn","btn-primary","pull-right","mt-2","addtobag",3,"disabled","click"],[1,"col-md-12","mb-5"],[1,"col-md-4"],["class","form-group ",4,"ngIf"],[1,"w-100",3,"ngModel","placeholder","settings","data","ngModelChange"],[1,"w-100",3,"disabled","ngModel","settings","data","ngModelChange"],[1,"input-group","mb-3","col-md-3"],["title","add in saleman's bag","class","btn btn-success",3,"click",4,"ngIf"],["title","add in saleman's bag",1,"btn","btn-success",3,"click"],["class","btn btn-primary",3,"routerLink",4,"ngIf"],[1,"btn","btn-primary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-external-link"],[1,"td-text-mid"],["href","javascript:void(0)",1,"text-primary","font-weight-bold",3,"routerLink"],[3,"href"],["aria-hidden","true",1,"fa","fa-phone","text-success"],["class","text",4,"ngIf"],["class","td-text-mid",4,"ngIf"],[1,"text"],[1,"table","bg-light","rounded"],["title","update quantity","aria-hidden","true",1,"fa","fa-edit","cursor-p",3,"click"],["name","userId",1,"form-control","mw-200",3,"ngModel","ngClass","ngModelChange"],[3,"selected","ngValue",4,"ngFor","ngForOf"],[3,"selected","ngValue"],["href","javascript:void(0)",1,"text-primary","font-weight-bold"],["type","text",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,i){1&e&&(t._UZ(0,"app-header")(1,"br"),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"h2")(6,"u"),t._uU(7,"Manage Saleman's bag by Admin"),t.qZA()()()(),t.TgZ(8,"div",1),t.YNc(9,D,2,1,"div",3),t.YNc(10,E,2,1,"div",3),t.YNc(11,K,5,4,"div",3),t.YNc(12,G,4,4,"div",4),t.YNc(13,V,2,1,"div",4),t.YNc(14,rt,10,1,"div",5),t.qZA(),t._UZ(15,"br")(16,"br"),t.TgZ(17,"h4",6)(18,"strong")(19,"u"),t._uU(20,"Products"),t.qZA()()(),t.YNc(21,nt,4,0,"h4",7),t.YNc(22,at,4,2,"h5",7),t.YNc(23,ot,4,0,"h5",7),t.TgZ(24,"div",8)(25,"div",9)(26,"table",10)(27,"thead",11)(28,"tr")(29,"th",12),t._uU(30,"Product Id"),t.qZA(),t.TgZ(31,"th",12),t._uU(32,"Product Name"),t.qZA(),t.TgZ(33,"th",12),t._uU(34,"Qty"),t.qZA(),t.TgZ(35,"th",12),t._uU(36,"order item ids"),t.qZA()()(),t.TgZ(37,"tbody"),t.YNc(38,dt,10,4,"tr",13),t._UZ(39,"tr"),t.qZA()()()()(),t._UZ(40,"hr",14),t.TgZ(41,"h4",6)(42,"strong")(43,"u"),t._uU(44,"Assign More Products Manually To Saleman"),t.qZA()()(),t.TgZ(45,"div",15)(46,"div",1)(47,"div",16)(48,"div",17)(49,"label",18),t._uU(50,"Search Products: "),t.qZA(),t.TgZ(51,"ng-multiselect-dropdown",19),t.NdJ("ngModelChange",function(a){return i.SelectedProduct=a})("ngModelChange",function(a){return i.searchModelChanged.next(a+"/products")}),t.qZA()()(),t.TgZ(52,"div",20),t.YNc(53,lt,4,1,"div",21),t.qZA(),t.TgZ(54,"div",22),t.YNc(55,ct,4,1,"div",21),t.qZA(),t.TgZ(56,"div",23)(57,"button",24),t.NdJ("click",function(){return i.saveSpareProductinBag(i.spareQty,i.SelectedProduct,i.notes)}),t._uU(58,"Add to bag"),t.qZA()(),t._UZ(59,"div",25),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngIf",i.user&&i.user.Role<=8),t.xp6(1),t.Q6J("ngIf",i.user&&i.user.Role<=8),t.xp6(1),t.Q6J("ngIf",i.user&&i.user.Role<=8),t.xp6(1),t.Q6J("ngIf",i.orderList.length&&i.SelectedSaleman),t.xp6(1),t.Q6J("ngIf",i.orderList.length&&i.SelectedSaleman),t.xp6(1),t.Q6J("ngIf",i.SelectedSaleman&&i.orderList),t.xp6(7),t.Q6J("ngIf",!i.SelectedSaleman),t.xp6(1),t.Q6J("ngIf",i.ProductAndItemList&&i.ProductAndItemList.length),t.xp6(1),t.Q6J("ngIf",i.SelectedSaleman&&i.ProductAndItemList&&!i.ProductAndItemList.length),t.xp6(15),t.Q6J("ngForOf",i.ProductAndItemList),t.xp6(13),t.Q6J("ngModel",i.SelectedProduct)("settings",i.productListDropdownSettings)("data",i.productList),t.xp6(2),t.Q6J("ngIf",i.productList&&i.productList.length||!0),t.xp6(2),t.Q6J("ngIf",i.productList&&i.productList.length||!0),t.xp6(2),t.Q6J("disabled",!i.SelectedProduct||!i.spareQty||i.spareQty<=0))},dependencies:[u.rH,u.yS,c.mk,c.sg,c.O5,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.On,Z.P,T.O,c.uU],styles:[".createbag[_ngcontent-%COMP%]{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:#fff;cursor:pointer;background-color:#e91e63;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:5px;transition:var(--bs-navbar-toggler-transition);left:200px;top:7px;text-decoration:none;border-color:red}.addtobag[_ngcontent-%COMP%]{background-color:#e91e63;border-color:#e91e63}"]}),s})()},{path:"edit-bag/:id",canActivate:[m.B],component:k},{path:"**",redirectTo:"admin-create-bag"}];let _t=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.Bz.forChild(gt),u.Bz]}),s})();var mt=d(2271);let ht=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_t,mt.m,T.Z.forRoot()]}),s})()}}]);