import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-truck-add',
  templateUrl: './dialog-truck-add.component.html',
  styleUrls: ['./dialog-truck-add.component.scss']
})
export class DialogTruckAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogTruckAddComponent>) {}

  ngOnInit(): void {
  }

}
