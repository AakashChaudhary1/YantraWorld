import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DistributersList } from './register/distributerslist';
import { HttpApiService } from 'src/app/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = environment.apiUrl || localStorage.getItem('ServerUrl');
  constructor(private http: HttpApiService) { }

  AddNewCustomer(customer: Customer): Observable<boolean> {
    return this.http.post(`customer/addNewCustomer`, customer);
  }

  login(Mobile:number,password:string): Observable<any> {
    return this.http.post(`customer/authenticateLogin`,{Mobile:Mobile,Password:password})
  }

  Next(Mobile:number):Observable<any>{
    return this.http.post(`customer/authenticateLogin`,{Mobile:Mobile})
  }
  Logout() {
    let result = this.http.get(`customer/logout`);
    return result;
  }

  getCustomerById(id) {
    return this.http.get(`customer/getCustomerById/${id}`);
  }
  getDistributersList(): Observable<DistributersList[]> {
    return this.http.get(`customer/getPartnersList`);
  }
  updateCustomer(data: any): Observable<any> {
    return this.http.post(`user/updateUserById`, data);
  }
}
