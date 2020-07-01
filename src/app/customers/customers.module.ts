import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers.component';
import { BuyInventoryComponent } from './buy-inventory/buy-inventory.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';


const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
        children: [
            {
                path: ':id',
                component: BuyInventoryComponent
            },
            {
                path: ':id/purchasehistory',
                component: PurchaseHistoryComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        CustomersComponent,
       CustomerEditComponent,
       BuyInventoryComponent,
       PurchaseHistoryComponent
        
    ],

    imports: [
        CommonModule, 
        FormsModule,
        RouterModule.forChild(routes)
    ]
    
})
export class CustomersModule{}