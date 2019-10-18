import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs/internal/Observable';

export interface Bidder {
    bidderID: number;
    status?: any;
    compliance: string;
    tq1?: any;
    tq1Response?: any;
    tq2?: any;
    tq2Response?: any;
    tbtqID: number;
    screening: string;
}

export class TBEDetails {
    screening: string;
    header: string;
    packageHeaderID: number;
    criteria: string;
    tbeID: number;
    bidders: Bidder[];
}

export interface Payload {
    message: string;
    data: TBEDetails[];
}

export interface RootObject {
    success: boolean;
    payload: Payload;
}

@Injectable()
export class Service {
    url: string;
    res:any;

    constructor(private http:HttpClient) { 
        this.url='http://10.1.170.167:3200/api/tbe/';
    }

    getTQsForTBE(tbeID) {
        return this.http.get(this.url + tbeID + '/detail');
    }

    getTestTBE(): Observable<RootObject> {
        this.res = this.http.get<RootObject>(this.url + '89/detail');
        return this.res;
    }
}

