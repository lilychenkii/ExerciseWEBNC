import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customerservice } from '../myservices/customerservice';

@Component({
  selector: 'app-listcustomerservice',
  standalone: false,
  templateUrl: './listcustomerservice.html',
  styleUrl: './listcustomerservice.css',
})
export class Listcustomerservice {
  customers:any;
  constructor(private router:Router,private activeRouter:ActivatedRoute, private cs:Customerservice)
  {
    this.customers = this.cs.get_all_customers();
  }
  view_detail(id:any)
  {
    this.router.navigate(["list-customer-service",id])
  }
}
