import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  inventoryForm: FormGroup;
  editMode = false;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private inventoryService: InventoryService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = (params['id'])? true: false; //editMode is set to true if id is present in the route and false if otherwise 
      //console.log(this.editMode);
      this.onInitForm();
    });
  }

  //initializes the form depending on if on editmode or not
  onInitForm(){
    let inventoryName = '';
    let inventoryAmount = null;
    let inventoryImagePath = '';
    let inventoryDescription = '';

    //if an id is present in the route path, then we arw in editmode
    if(this.editMode){
      //get inventory from the inventory service
      const inventory = this.inventoryService.getInventory(this.id);
      inventoryName = inventory.name;
      inventoryAmount = inventory.amount;
      inventoryImagePath = inventory.imagePath;
      inventoryDescription = inventory.description;
    }

    //prepopulates the form controls if on edit mode,
      // else form controls are empty strings
      this.inventoryForm = new FormGroup({
        name: new FormControl(inventoryName, Validators.required),
        amount: new FormControl(inventoryAmount, [Validators.required, this.lessThanOneValidator]),
        imagePath: new FormControl(inventoryImagePath, Validators.required),
        description: new FormControl(inventoryDescription, Validators.required)
      });
      console.log(this.inventoryForm)
  }

  //custom validator to check if the amount entered is not less than 1
  lessThanOneValidator(control: AbstractControl): { [key: string]: boolean } | null {
    //key is the name of the error and the value is true if error occurs else returns null
     return (control.value < 1 && control.value !== null)? { 'lessThanOne': true }: null;

  }

  onSubmit(){
      if(this.editMode){
        //update existing inventory if in editmode
        this.inventoryService.updateInventory(this.id, this.inventoryForm.value);
      }else{
        this.inventoryService.addNewInventory(this.inventoryForm.value);
      }

      this.onCancel();

  }


  onCancel(){
    this.router.navigate(['../'],{relativeTo: this.route});
  }


}
