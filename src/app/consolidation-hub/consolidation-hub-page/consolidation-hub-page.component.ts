import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogTruckAddComponent } from '../dialog-truck-add/dialog-truck-add.component';
import { ConsolidationHubService } from '../services/consolidation-hub.service';

@Component({
  selector: 'app-consolidation-hub-page',
  templateUrl: './consolidation-hub-page.component.html',
  styleUrls: ['./consolidation-hub-page.component.scss']
})
export class ConsolidationHubPageComponent implements OnInit {

  confirmationOfTruck$!: Subscription;
  constructor(public dialog: MatDialog, private consolidationHubService: ConsolidationHubService) { }

  ngOnInit(): void {
  }

  trucks = [
    {
      name: "Truck 01",
      quantity: "08",
      cardClasses: {
        "truck-info__normal": true,
        "p-24": true
      },
      iconClasses: {
        "fa-solid": true,
        "fa-truck": true,
        "fa-truck_sm": true,
        "fa-truck_color-normal": true
      },
      isSelected: false
    },
    {
      name: "Truck 02",
      quantity: 12,
      cardClasses: {
        "truck-info__selected": true,
        "p-24": true
      },
      iconClasses: {
        "fa-solid": true,
        "fa-truck": true,
        "fa-truck_md": true,
        "fa-truck_color-olive": true
      },
      isSelected: true
    },
    {
      name: "Truck 03",
      quantity: 16,
      cardClasses: {
        "truck-info__normal": true,
        "p-24": true
      },
      iconClasses: {
        "fa-solid": true,
        "fa-truck": true,
        "fa-truck_md": true,
        "fa-truck_color-normal": true
      },
      isSelected: false
    }
  ];

  addTrucks() {
    this.trucks.push(
      {
        name: "Truck 0" + (this.trucks.length + 1),
        quantity: "12",
        cardClasses: {
          "truck-info__normal": true,
          "p-24": true
        },
        iconClasses: {
          "fa-solid": true,
          "fa-truck": true,
          "fa-truck_sm": true,
          "fa-truck_color-normal": true
        },
        isSelected: false
      },

    )
  }

  openDialog(): void {
    this.dialog.open(DialogTruckAddComponent, { width: '500px' });
  }

  getTruckConfirmation() {
    this.confirmationOfTruck$ = this.consolidationHubService.getConfirmationOfAddingTruck()
                                .subscribe((res:boolean)=>{
                                  if(res){
                                    this.addTrucks();
                                  }
                                })
  }

}
