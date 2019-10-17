import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from './tbe-details.service';


@Component({
  selector: 'app-tbe-details',
  templateUrl: './tbe-details.component.html',
  styleUrls: ['./tbe-details.component.css'],
  providers: [Service]
})
export class TbeDetailsComponent implements OnInit {

  tbeId : any;
  dataSource: any;

  constructor(private route: ActivatedRoute, service: Service) {
      
    this.route.url.subscribe(value => {
      this.tbeId = value[value.length - 1];

      service.getTQsForTBE(this.tbeId).subscribe((res:any) => {
        console.log(res.payload.data);
        this.dataSource = res.payload.data;     
      });
    });    
   }

  ngOnInit() {    
  }



}
