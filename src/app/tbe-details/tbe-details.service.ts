import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    url: string;

    constructor(private http:HttpClient) { 
        this.url='http://10.1.170.167:3200/api/tbe/';
    }

    getTQsForTBE(tbeID) {
        return this.http.get(this.url + tbeID + '/detail');
    }
}