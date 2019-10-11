import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TbedashboardComponent } from './tbedashboard/tbedashboard.component';
import { CreateNewTBEComponent } from './create-new-tbe/create-new-tbe.component';
import { RefProjBiddersComponent } from './ref-proj-bidders/ref-proj-bidders.component';
import { TbeDetailsComponent } from './tbe-details/tbe-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/tbedashboard', pathMatch: 'full' },
  { path: 'tbedashboard', component:  TbedashboardComponent },
  { path: 'createnewtbe', component: CreateNewTBEComponent },
  { path: 'refproject', component: RefProjBiddersComponent },
  { path: 'tbedetails/:id', component:  TbeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
