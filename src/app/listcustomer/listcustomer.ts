import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customerservice } from '../myservices/customerservice';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers: any;
  
  constructor(private router:Router, private activeRouter:ActivatedRoute, private cs:Customerservice)
  {
    this.customers = this.cs.get_all_customers();
  }
  
  view_detail(id:any)
  {
    this.router.navigate(["list-customer",id])
  }
}
