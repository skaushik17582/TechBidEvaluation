import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { DxSelectBoxComponent } from "devextreme-angular";
import { Project, Discipline, Package, Service } from '../app.service';
import { Router } from '@angular/router';
import CustomStore from "devextreme/data/custom_store";
import { createStore } from "devextreme-aspnet-data-nojquery";

@Component({
  selector: 'create-tbe',
  providers: [ Service ],
  templateUrl: './create-new-tbe.component.html',
  styleUrls: ['./create-new-tbe.component.css']
})
export class CreateNewTBEComponent implements OnInit, AfterViewInit{  
  
  projects: Project[];
  disciplines: Discipline[]; 
  packages: Package[]; 
  refprojects: Project[];
  service: Service;
  refProjectId: number;
  store: CustomStore;

  public projectArr: any;


  @ViewChild("refproject", {static: false}) refProjSelectBox: DxSelectBoxComponent;

    constructor( service: Service, public router: Router ) {
        let serviceUrl = "http://10.1.170.167:3200/api/project/all";
        this.service = service;
        this.projects = service.getProjects();
        this.disciplines = service.getDisciplines();
        this.packages = service.getPackages();

        this.store = createStore({
          key: "ID",
          loadUrl: serviceUrl
      });
    }

    ngOnInit() {

      this.service.getProjectData().subscribe((res:any) => {
        console.log(res.payload.data);
        this.projectArr = res.payload.data;
      });
    }
  
    ngAfterViewInit() { 
      //this.refProjSelectBox.visible = false;
    }
  
    onPackageChanged (e) { 
      this.refprojects = this.service.getRefProjects(e.value.ID);
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
