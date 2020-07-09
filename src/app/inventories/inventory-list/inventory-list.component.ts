import { Component, OnInit, OnDestroy } from '@angular/core';
import { Inventory } from '../inventory.model';
import { InventoryService } from '../inventory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {
inventories: Inventory[];
subscription: Subscription;

  constructor(private inventoryService: InventoryService,
     private router: Router,
     private route: ActivatedRoute,
     private dataStorageService: DataStorageService) { }


  ngOnInit() {
    
    //this.dataStorageService.fetchInventories().subscribe();
    this.inventories = this.inventoryService.getInventories();

   this.subscription = this.inventoryService.inventoryChanged
    .subscribe((inventories: Inventory[])=>{
      this.inventories = inventories;
    })
  }

  //navigate to new inventory route which is also the inventory-edit component
  onNewInventory(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
