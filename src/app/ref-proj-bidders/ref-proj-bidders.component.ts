import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ref-proj-bidders',
  templateUrl: './ref-proj-bidders.component.html',
  styleUrls: ['./ref-proj-bidders.component.css']
})
export class RefProjBiddersComponent implements OnInit {

  refProjectId: number;
  private sub: any;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.refProjectId = +params['refProjId'] || 0;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  TBEDetails()
  {
    alert(this.refProjectId);
  }

}
