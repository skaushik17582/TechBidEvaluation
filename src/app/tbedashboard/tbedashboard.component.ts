import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tbedashboard',
  templateUrl: './tbedashboard.component.html',
  styleUrls: ['./tbedashboard.component.css']
})
export class TbedashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  createNewTBE()
  {
    this.router.navigate(['/createnewtbe']);
  }

}
