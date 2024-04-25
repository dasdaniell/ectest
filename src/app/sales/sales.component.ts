import { Component } from '@angular/core';
import * as serverData from "../../data/potato_sales.json";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.template.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

  public ngOnInit() {
    console.log(serverData);
  }

}
