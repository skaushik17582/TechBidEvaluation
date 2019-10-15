import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Project {
    ID: number;
    Number: string;
    Title: string;
    ClientProjectNumber: string;
    ContractNumber: string;
    ClientID: number;
}

let refprojects: Project[] = [{
    ID: 1,
    Number: '6071',
    Title: 'QP BH Ph 1',
    ClientProjectNumber: '4004',
    ContractNumber: 'GC0031331',
    ClientID: 1
}];

@Injectable()
export class Service {
    url: string;

    constructor(private http:HttpClient) { 
      this.url='http://10.1.170.167:3200/api';
    }

    getProjects()
    {
      return this.http.get(this.url + '/project/all');
    }

    getDisciplines()
    {
      return this.http.get(this.url + '/discipline/all');
    }

    getPackages()
    {
      return this.http.get(this.url + '/package/all');
    }

    getRefProjects(packageId)
    {
      return this.http.get(this.url + '/package/' + packageId + '/projects');
    }
}