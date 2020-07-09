import { Injectable } from '@angular/core';
import { InventoryService } from '../inventories/inventory.service';
import { Inventory } from '../inventories/inventory.model';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../customers/customer.model';
import { CustomersService } from '../customers/customers.service';
import { map, tap, shareReplay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(
        private inventoryService: InventoryService, 
        private http: HttpClient,
        private customerService: CustomersService){}

    //save Inventories  to the database
    postInventories(){
        //get inventories array from inventory service
        const inventories: Inventory[] = this.inventoryService.getInventories();
    
        if(inventories.length > 0){
            return this.http.put('https://arus-f1963.firebaseio.com/inventories.json', inventories)
            .subscribe((response1)=>{
                alert('Inventories Successfully saved!');
           });
        }else{
            alert('cannot save empty inventory lists');
        }
        
        
    }

    //save customers  to the database
    postCustomers(){
        
        //get customers array from customer service
        const customers: Customers[] = this.customerService.getCustomers();
        if(customers.length > 0){
            return this.http.put('https://arus-f1963.firebaseio.com/customers.json', customers)
            .subscribe((response1)=>{
                alert('Customers Successfully saved!');
            });
        }else{
            alert('cannot save empty customer lists');
        }
        
        
    }

    //fetch inventories from database
    fetchInventories(){
        return this.http.get<Inventory[]>('https://arus-f1963.firebaseio.com/inventories.json')
        .pipe(
            shareReplay(),
            tap(inventories =>{
            if(inventories){
                this.inventoryService.getInventoriesFromDatabase(inventories);
            }else{
                alert('No Inventories');
            }
        }))
    }

    fetchCustomers(){
        return this.http.get<Customers[]>('https://arus-f1963.firebaseio.com/customers.json')
        .pipe(
            shareReplay(),
            tap(
                customers =>{
                    if(customers){
                        this.customerService.getCustomersFromDatabase(customers);
                    }else{
                        alert('No Inventories');
                    }
                }
            )
        )
        
    }
}