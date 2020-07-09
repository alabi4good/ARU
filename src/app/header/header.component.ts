import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
collapsed = true;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  //saves the inventory array to the firebase database
  onSaveInventory(){
    this.dataStorageService.postInventories();

  }

  //saves the inventory array to the firebase database
  onSaveCustomer(){
    this.dataStorageService.postCustomers();
  }


}


