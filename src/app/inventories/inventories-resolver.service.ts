import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.model';



@Injectable({providedIn: 'root'})

export class InventoryResolverService implements Resolve<Inventory[]>{
    // we can use resolver instead of using the ngIf condition incase our component 
    //isnt ready and the Api already made the call to the server
    //the resolver subscribes automatically for us
    constructor(private dataStorageService: DataStorageService, private inventoryService: InventoryService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const inventories = this.inventoryService.getInventories();
        if(inventories.length === 0){
            return this.dataStorageService.fetchInventories();
        }else {
            return inventories;
        }
        
    }
    
}