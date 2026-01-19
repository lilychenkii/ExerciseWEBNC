import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customerservice } from '../myservices/customerservice';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail implements OnInit {
  selected_customer: any;
  fromRoute: string = '';

  constructor(private router: Router, private activeRouter: ActivatedRoute, private cs: Customerservice) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      let id = param.get("id");
      if (id != null) {
        this.selected_customer = this.cs.get_customer_by_id(id);
      }
    });
    
    // Determine which route we came from
    this.fromRoute = this.router.url.includes('list-customer-service') ? '/list-customer-service' : '/list-customer';
  }
}