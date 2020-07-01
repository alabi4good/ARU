import { Injectable } from '@angular/core';
import { Customers } from './customer.model';
import { Subject } from 'rxjs';
import { InventoryService } from '../inventories/inventory.service';

@Injectable({providedIn: 'root'})
export class CustomersService{
  customersChanged = new Subject<Customers[]>();
  startedEditing = new Subject<number>(); 
    purchaseHistoryId = new Subject<number>(); 
    constructor(private inventoryService: InventoryService){}
    // private customers: Customers[] = [
    //     new Customers('Brian Markle', 'b_markle@gmail.com', 6782345765),
    //     new Customers('Steve Adams', 's_adams@gmail.com', 789270146),
    //     new Customers('Bob Jackson', 'b_jackson@gmail.com', 4561238054)
    // ];

    private customers: Customers[] = [];

    //get all the customers
    getCustomers(){
        return this.customers.slice();
    }

    //get a single customer
    getCustomer(i: number){
        return this.customers[i];
    }

    //add new customer
    addCustomer(newCustomer: Customers){
        this.customers.push(newCustomer);
        this.customersChanged.next(this.customers.slice());
    }

    //update existing customer
    updateCustomer(index: number,  newCustomer: Customers){
        this.customers[index] = newCustomer;
        this.customersChanged.next(this.customers.slice());
    }

    //delete customer
    deleteCustomer(index: number){
        this.customers.splice(index, 1);
        this.customersChanged.next(this.customers.slice());
    }


    //get customers from database
    getCustomersFromDatabase(customers: Customers[]){
        if(customers){
            this.customers = customers;
            this.customersChanged.next(this.customers.slice());
        }
    }

    getIngredients(){
        return this.inventoryService.getInventories()
    }

    

}