import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { DxSelectBoxComponent } from "devextreme-angular";
import { Service } from '../app.service';
import { Router } from '@angular/router';
import CustomStore from "devextreme/data/custom_store";
import { createStore } from "devextreme-aspnet-data-nojquery";

@Component({
  selector: 'create-tbe',
  providers: [ Service ],
  templateUrl: './create-new-tbe.component.html',
  styleUrls: ['./create-new-tbe.component.css']
})
export class CreateNewTBEComponent implements OnInit{  
  
  projects: any;
  disciplines: any; 
  packages: any; 
  refprojects: any;
  service: Service;
  refProjectId: number;
  store: CustomStore;

  @ViewChild("refproject", {static: false}) refProjSelectBox: DxSelectBoxComponent;

    constructor( service: Service, public router: Router ) {
        this.service = service;
    }

    ngOnInit() {

      this.service.getProjects().subscribe((res:any) => {
        console.log(res.payload.data);
        this.projects = res.payload.data;
      });

      this.service.getDisciplines().subscribe((res:any) => {
        console.log(res.payload.data);
        this.disciplines = res.payload.data;
      });

      this.service.getPackages().subscribe((res:any) => {
        console.log(res.payload.data);
        this.packages = res.payload.data;
      });      
    }

    onPackageChanged (e) { 
      this.service.getRefProjects(e.value.id).subscribe((res:any) => {
        alert(e.value.id);
        console.log(res.payload.data);
        this.refprojects = res.payload.data;
      });
      this.refProjSelectBox.visible = true;
    }

    onRefProjSelected (e) { 
      this.refProjectId = e.value.ID;
    }

    setBidders()
    {
      this.router.navigate(['/refproject'], { queryParams: { refProjId: this.refProjectId }});
    }
}
