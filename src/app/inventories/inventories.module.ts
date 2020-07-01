import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventories-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InventoriesComponent } from './inventories.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryStartComponent } from './inventory-start/inventory-start.component';
import { InventoryItemComponent } from './inventory-list/inventory-item/inventory-item.component';





@NgModule({
    declarations: [
        InventoriesComponent,
        InventoryDetailComponent,
        InventoryEditComponent,
        InventoryListComponent,
        InventoryStartComponent,
        InventoryItemComponent
    ],

    imports: [
        RouterModule,
        ReactiveFormsModule, 
        InventoryRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class InventoryModule{}