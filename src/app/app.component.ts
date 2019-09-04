import { Component } from '@angular/core';

export interface Discipline {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechBidEvaluation';

  disciplines: Discipline[] = [
    { id: 1, name: 'Process' },
    { id: 2, name: 'Piping' },
    { id: 3, name: 'Instrumentation' },
    { id: 4, name: 'Electrical' },
    { id: 5, name: 'Structural' },
    { id: 6, name: 'Pipelines' },
  ];
}