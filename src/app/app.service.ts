import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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