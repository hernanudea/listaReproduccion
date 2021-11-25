import { Component, OnInit } from '@angular/core';

import { ListasService} from "../../../services/api/listas.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  constructor(private api: ListasService) { }

  ngOnInit(): void {
    this.api.getAllList().subscribe(data => {
      console.log(data);
    })
  }

}
