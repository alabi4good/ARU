import { Injectable } from '@angular/core';
import { Inventory } from './inventory.model';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class InventoryService{

//subject to listen to and update any change that occur in the inventory array
inventoryChanged = new Subject<Inventory[]>();
inventoryIndex = new Subject<number>();


    // private inventories: Inventory[] = [
    //     new Inventory(
    //         'BSS DSP Model 1',
    //         3000,
    //         'This is thie first model of Bss Dsp Model made by Harman Technologies',
    //         'https://adn.harmanpro.com/product_attachments/product_attachments/5696_1560266516/BSS_DCP-555_Front_original.png'
    //     ),
    //     new Inventory(
    //         'BSS DSP Model 2',
    //         4000,
    //         'This is the new and revised version of Bss Dsp Model made by Harman Technologies',
    //         'https://adn.harmanpro.com/product_attachments/product_attachments/1582_1390842534/BLU-50-wEars-3-4_original.jpg'
    //     ),
    //     new Inventory(
    //         'Crown Amp Model 1',
    //         5000,
    //         'This is the first model of Crown Amp Model made by Harman Technologies',
    //         'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/AmpCE2000-e743180ac62c42efc72b3a74a6005fa1.jpg'
    //     ),
    //     new Inventory(
    //         'Crown Amp Model 2',
    //         7000,
    //         'This is the new and revised version of Crown Amp Model made by Harman Technologies',
    //         'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/AmpCE2000-e743180ac62c42efc72b3a74a6005fa1.jpg'
    //     ),
    //     new Inventory(
    //         'JBL Speaker 1',
    //         50,
    //         'This is the first model of JBL Speaker made by Harman Technologies',
    //         'https://images.crutchfieldonline.com/products/2019/24/109/g109FLIP5RD-F.jpg'
    //     ),
    //     new Inventory(
    //         'JBL Speaker 2',
    //         200,
    //         'This is the new model of JBL Speaker made by Harman Technologies',
    //         'https://images.crutchfieldonline.com/products/2019/24/109/g109FLIP5RD-F.jpg'
    //     ),
    //     new Inventory(
    //         'JBL Speaker 3',
    //         1000,
    //         'This is the new and revised model of JBL Speaker with automatic transimission made by Harman Technologies',
    //         'https://images.crutchfieldonline.com/products/2019/24/109/g109FLIP5RD-F.jpg'
    //     ),
    //     new Inventory(
    //         'AKG Mic 1',
    //         110,
    //         'This is the first model of AKG Mic made by Harman Technologies',
    //         'https://www.ccisolutions.com/StoreFront/jsp/images/products/AKG-C214_AE.JPG'
    //     ),
    //     new Inventory(
    //         'AKG Mic 2',
    //         250,
    //         'This is the new and revised model of AKG Mic made by Harman Technologies',
    //         'https://i.ytimg.com/vi/aU0xApnHOWo/maxresdefault.jpg'
    //     ),
    //     new Inventory(
    //         'SoundCraft Mixer 8 channel',
    //         400,
    //         'This is the first model of SoundCraft Mixer 8 channel made by Harman Technologies',
    //         'https://www.soundpro.com/catalog/items/EPM12Angled.jpg'
    //     ),
    //     new Inventory(
    //         'SoundCraft Mixer 24 channel',
    //         1000,
    //         'This is the new and revised model ofSoundCraft Mixer 24 channel made by Harman Technologies',
    //         'https://adn.harmanpro.com/product_attachments/product_attachments/3404_1468941642/ghost_original.png'
    //     ),
    //     new Inventory(
    //         'AMX Touchscreen 8',
    //         2000,
    //         'This is the first model of AMX Touchscreen 8 made by Harman Technologies',
    //         'https://cdn.imgbin.com/16/6/20/imgbin-touchscreen-amx-llc-feature-phone-display-device-amx-mxt-701-7-modero-x-series-g5-tabletop-touch-panel-fg5968-53-others-QtdZ1cLGzzRqrt7e4fi3n2LsH.jpg'
    //     ),
    //     new Inventory(
    //         'AMX Control Master',
    //         3000,
    //         'This is the new and revised model of AMX Control Master made by Harman Technologies',
    //         'https://albanyobjects.blob.core.windows.net/productimages/1678/132095935/923caff2-cba3-44f2-a75c-5de59b5b4157.jpg'
    //     )
        
    // ];
   private inventories: Inventory[] = [];

    //return the full array of inventories
    getInventories(){
        return this.inventories.slice();
    }

    //return just a single inventory object
    getInventory(index: number){
        return this.inventories[index];
    }

    //update or edit elements of the inventories array
    updateInventory(index: number, newInventory: Inventory){
        this.inventories[index] = newInventory;
        this.inventoryChanged.next(this.inventories.slice());
    }

    //add new inventory to the inventories array
    addNewInventory(newInventory: Inventory){
        this.inventories.push(newInventory);
        this.inventoryChanged.next(this.inventories.slice());
    }

    //delete from inventory array
    deleteInventory(index: number){
        this.inventories.splice(index, 1);
        this.inventoryChanged.next(this.inventories.slice());
    }

    //get inventories from database
    getInventoriesFromDatabase(inventories: Inventory[]){
        if(inventories){
            this.inventories = inventories;
            this.inventoryChanged.next(this.inventories.slice());
        }
            
        
    }

    pushInventoryId(id: number){
        return this.inventoryIndex.next(id);
    }
}