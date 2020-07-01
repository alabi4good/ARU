import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customer.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit, OnDestroy {
editMode = false;
editedCustomerIndex: number;
editedCustomer: Customers;
subscription: Subscription;

@ViewChild('customerForm', {static: false}) customerForm: NgForm;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.subscription = this.customersService.startedEditing
    .subscribe((index: number)=> {
      this.editMode = true;
      this.editedCustomerIndex = index;
      this.editedCustomer = this.customersService.getCustomer(index);
      this.customerForm.setValue({
        name: this.editedCustomer.name,
        phone: this.editedCustomer.phone,
        email: this.editedCustomer.email
      })
    })
  }

  //Add new customer
  onAddCustomer(form: NgForm){

    const name = form.value.name;
    const phone = form.value.phone;
    const email = form.value.email;
    
    //set new customer
    const newCust = new Customers(name,email,phone);

    //if we are in edit mode
    if(this.editMode){
      this.customersService.updateCustomer(this.editedCustomerIndex, newCust);
    }else{
      //adds new customer to the array
      this.customersService.addCustomer(newCust);
    }
    //clear the form
    this.onClearForm();
  }

  //clears the form
  onClearForm(){
    this.editMode = false;
    this.customerForm.reset();
  }

  //delete customer
  onDeleteItem(){
    this.customersService.deleteCustomer(this.editedCustomerIndex);
    this.onClearForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
