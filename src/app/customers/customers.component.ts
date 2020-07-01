import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customers } from './customer.model';
import { CustomersService } from './customers.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
customers: Customers[];
subscription: Subscription;
  constructor(private customerService: CustomersService,
    private dataStorageService: DataStorageService,
    private router: Router) { }

  ngOnInit() {

    this.dataStorageService.fetchCustomers();
    this.customers = this.customerService.getCustomers();
  
    //keep the customers component updated of any changes that occur in the customer-edit
    this.subscription = this.customerService.customersChanged
    .subscribe((newCustomers: Customers[])=> {
      this.customers = newCustomers;
    })
  }

  onEditCustomer(i: number){
   this.customerService.startedEditing.next(i);
  }

  onBuyInventory(id: number){

  }

  onViewHistory(id: number){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
