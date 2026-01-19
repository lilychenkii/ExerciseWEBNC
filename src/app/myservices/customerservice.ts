import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
  customers = [
    {"id":"c1","name":"Nguyen Van A","gender":"male","image":"assets/images/c1.png"},
    {"id":"c2","name":"Tran Thi B","gender":"female","image":"assets/images/c2.png"},
    {"id":"c3","name":"Le Van C","gender":"male","image":"assets/images/c3.png"},
    {"id":"c4","name":"Pham Thi D","gender":"female","image":"assets/images/c4.png"},
    {"id":"c5","name":"Hoang Van E","gender":"male","image":"assets/images/c5.png"} 
  ];
  public get_all_customers()
  {
    return this.customers;
  }
  public get_customer_by_id(id: string)
  {
    return this.customers.find(c => c.id === id);
  }
}
