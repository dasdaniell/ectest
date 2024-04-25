import { Component } from '@angular/core';
import * as serverData from "../../data/potato_sales.json";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.template.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {
  public columnHedears: any[] = [];
  public rowData: any[] = [];

  public ngOnInit() {
    this.columnHedears = serverData.column;
    this.rowData = serverData.data;

    // let currentRow = this.rowData[0];
    // console.log(currentRow[this.columnHedears[1].field]);
  }

}
