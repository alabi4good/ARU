import { Component, OnInit, OnDestroy } from '@angular/core';
import { Inventory } from 'src/app/inventories/inventory.model';
import { InventoryService } from 'src/app/inventories/inventory.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomersService } from '../customers.service';




@Component({
  selector: 'app-buy-inventory',
  templateUrl: './buy-inventory.component.html',
  styleUrls: ['./buy-inventory.component.css']
})
export class BuyInventoryComponent implements OnInit {
inventories: Inventory[];
customerId: number;
  constructor(private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomersService) { }

  ngOnInit() {
    this.inventories = this.inventoryService.getInventories();
    
    //get the customer index number from the route
    this.route.params
    .subscribe((params: Params)=> {
      this.customerId = +params['id'];
    });
   
  }
  onPurchase(id: number){
     // this.inventoryService.pushInventoryId(id),
      //this.customerService.purchaseHistoryId.next(this.customerId)  
    this.router.navigate(['./customers', this.customerId, 'purchasehistory']);
  }

}
