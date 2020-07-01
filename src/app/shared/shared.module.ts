import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DropDownDirective } from './dropDown.directive';

@NgModule({
    declarations:[DropDownDirective],
    imports: [CommonModule],
    exports: [DropDownDirective, CommonModule]
})

export class SharedModule{}