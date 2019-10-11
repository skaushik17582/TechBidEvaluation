import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Service } from './tbedashboard.service';

@Component({
  selector: 'app-tbedashboard',
  templateUrl: './tbedashboard.component.html',
  styleUrls: ['./tbedashboard.component.css'],
  providers: [Service]
})
export class TbedashboardComponent implements OnInit {
    customers: Customer[];

    constructor(public router: Router, service: Service) { 
      this.customers =  service.getCustomers();
    }

  ngOnInit() {
  }

  createNewTBE()
  {
    this.router.navigate(['/createnewtbe']);
  }

}
