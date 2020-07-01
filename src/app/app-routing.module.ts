import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: '/inventories', pathMatch: 'full'},
    {
        path: 'inventories', 
        loadChildren: ()=>import('./inventories/inventories.module').then(m => m.InventoryModule) 
    },
    {
        path: 'customers', 
        loadChildren: ()=>import('./customers/customers.module').then(m => m.CustomersModule)
    }
]

@NgModule({
 declarations: [],
 
 imports: [
        FormsModule,  
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})


export class AppRoutingModule { }