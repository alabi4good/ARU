import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory.model';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {
inventory: Inventory;
id: number;

  constructor(
    private inventoryService: InventoryService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params)=> {
      this.id = +params['id'];
      this.inventory = this.inventoryService.getInventory(this.id);
    });
  }


  onEditInventory(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activeRoute}); //moves up one level in the path
  
  }

  //delete inventory
  onDeleteInventory(){
    this.inventoryService.deleteInventory(this.id);
    this.router.navigate(['/inventories']);
  }
}
