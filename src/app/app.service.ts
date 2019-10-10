import { Injectable } from '@angular/core';

export class Project {
    ID: number;
    Number: string;
    Title: string;
    ClientProjectNumber: string;
    ContractNumber: string;
    ClientID: number;
}

export class Discipline {
    ID: number;
    Name: string;
  }

  export class Package 
  {
    ID: number;
    Name: string;
    Title: string;
  }

let projects: Project[] = [{
    ID: 1,
    Number: '6071',
    Title: 'QP BH Ph 1',
    ClientProjectNumber: '4004',
    ContractNumber: 'GC0031331',
    ClientID: 1
}, {
    ID: 2,
    Number: '1234',
    Title: 'Another Project',
    ClientProjectNumber: '4321',
    ContractNumber: 'Any Random Number',
    ClientID: 1
}];

let disciplines: Discipline[] = [
    { ID: 1, Name: 'Process' },
    { ID: 2, Name: 'Piping' },
    { ID: 3, Name: 'Instrumentation' },
    { ID: 4, Name: 'Electrical' },
    { ID: 5, Name: 'Structural' },
    { ID: 6, Name: 'Pipelines' }
  ];

let packages: Package[] = [
    { ID: 1, Name: 'Subsea Flange', Title: 'Subsea Flange' },
    { ID: 2, Name: 'Cladding', Title: 'Cladding' },
    { ID: 2, Name: 'Switchgear', Title: 'HV Switchgear' }
  ]; 

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
    getProjects() : Project[] {
        return projects;
    }

    getDisciplines() : Discipline[] {
        return disciplines;
    }

    getPackages() : Package[] {
        return packages;
    }

    getRefProjects(packageId) : Project[] {
        return refprojects;
    }
}