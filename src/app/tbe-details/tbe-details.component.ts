import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service ,RootObject, TBEDetails} from './tbe-details.service';


@Component({
  selector: 'app-tbe-details',
  templateUrl: './tbe-details.component.html',
  styleUrls: ['./tbe-details.component.css'],
  providers: [Service]
})
export class TbeDetailsComponent implements OnInit {

  tbeId : any;
  dataSource: TBEDetails[];

  constructor(private route: ActivatedRoute, service: Service) {
    //this.dataSource = service.getTestTBE();  
    this.route.url.subscribe(value => {
      this.tbeId = value[value.length - 1];      
      service.getTestTBE().subscribe((res:RootObject) => {
        console.log(res);
        this.dataSource = res.payload.data;
      });
    });    
   }

  ngOnInit() {    
  }
}
