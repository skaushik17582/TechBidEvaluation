import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './tbedashboard.service';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-tbedashboard',
  templateUrl: './tbedashboard.component.html',
  styleUrls: ['./tbedashboard.component.css'],
  providers: [Service]
})
export class TbedashboardComponent {

    dataSource: any;

    constructor(public router: Router, service: Service) {
      service.getTBEsForProject(1).subscribe((res: any) => {
        console.log(res.payload.data);
        this.dataSource = res.payload.data;
      });
    }

  createNewTBE() {
    this.router.navigate(['/createnewtbe']);
  }


  viewEditClick(e) {
    e.event.preventDefault();
    this.router.navigate(['/tbedetails/' + e.row.data.id]);
  }

}
