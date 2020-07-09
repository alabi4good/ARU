import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Customers } from './customer.model';
import { CustomersService } from './customers.service';




@Injectable({providedIn: 'root'})

export class CustomerResolverService implements Resolve<Customers[]>{
    // we can use resolver instead of using the ngIf condition incase our component 
    //isnt ready and the Api already made the call to the server
    //the resolver subscribes automatically for us
    constructor(private dataStorageService: DataStorageService, 
        private customerService: CustomersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const customers = this.customerService.getCustomers();
        if(customers.length === 0){
            return this.dataStorageService.fetchCustomers();
        }else {
            return customers;
        }
        
    }
    
}