import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './tbedashboard.service';

@Component({
  selector: 'app-tbedashboard',
  templateUrl: './tbedashboard.component.html',
  styleUrls: ['./tbedashboard.component.css'],
  providers: [Service]
})
export class TbedashboardComponent implements OnInit {

    dataSource: any;

    constructor(public router: Router, service: Service) { 
      this.viewEditClick = this.viewEditClick.bind(this);  
      service.getTBEsForProject(1).subscribe((res:any) => {
        console.log(res.payload.data);
        this.dataSource = res.payload.data;        
      });
    }

  ngOnInit() {
  }

  createNewTBE()
  {
    this.router.navigate(['/createnewtbe']);
  }

  viewEditClick(e) {
    this.router.navigate(['/tbedetails/' + e.row.data.id]);
  }

}
