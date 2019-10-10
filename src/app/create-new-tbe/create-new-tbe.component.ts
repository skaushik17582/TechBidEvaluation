import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { DxSelectBoxComponent } from "devextreme-angular";
import { Project, Discipline, Package, Service } from '../app.service';
import { Router } from '@angular/router';

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

  @ViewChild("refproject", {static: false}) refProjSelectBox: DxSelectBoxComponent;

    constructor( service: Service, public router: Router ) {
        this.service = service;
        this.projects = service.getProjects();
        this.disciplines = service.getDisciplines();
        this.packages = service.getPackages();
    }

    ngOnInit() {
    }
  
    ngAfterViewInit() { 
      //this.refProjSelectBox.visible = false;
    }
  
    onPackageChanged (e) { 
      this.refprojects = this.service.getRefProjects(e.value.ID);
      this.refProjSelectBox.visible = true;
    }

    onRefProjSelected (e) { 
      alert(e.value.ID);
      this.refProjectId = e.value.ID;
    }

    setBidders()
    {
      alert('set bidder- ' + this.refProjectId);
      this.router.navigate(['/refproject'], { queryParams: { refProjId: this.refProjectId }});
    }
}
