import { Component, OnInit } from '@angular/core';
import { CustomergroupService } from '../myservices/customergroup.service';

@Component({
  selector: 'app-exercise18',
  standalone: false,
  templateUrl: './exercise18.html',
  styleUrl: './exercise18.css',
})
export class Exercise18 implements OnInit {
  public customerGroups: any;

  constructor(private customerGroupService: CustomergroupService) { }

  ngOnInit() {
    this.customerGroupService.getCustomerGroups().subscribe(
      (data) => {
        console.log('Data loaded:', data);
        this.customerGroups = data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
}