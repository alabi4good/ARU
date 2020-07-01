import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventoriesComponent } from "./inventories.component";
import { InventoryStartComponent } from './inventory-start/inventory-start.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryResolverService } from './inventories-resolver.service';


const routes: Routes = [
    {
        path: '',
        component: InventoriesComponent,
        // canActivate:[AuthGuard],
        children:[
          { 
            path: '', 
            component: InventoryStartComponent
          },
          {
            path: 'new', 
            component: InventoryEditComponent
          },
          { 
            path: ':id', 
            component: InventoryDetailComponent,
            resolve: [InventoryResolverService] //using resolver to load data from API and get data ready before the component is ready
          },
          { 
            path: ':id/edit', 
            component: InventoryEditComponent, 
            resolve: [InventoryResolverService]//using resolver to load data from API and get data ready before the component is ready
          }
        ]
    }
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InventoryRoutingModule{}