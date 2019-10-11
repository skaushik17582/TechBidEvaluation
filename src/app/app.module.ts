import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewTBEComponent } from './create-new-tbe/create-new-tbe.component';
import { RefProjBiddersComponent } from './ref-proj-bidders/ref-proj-bidders.component';
import { 
  DxButtonModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
  DxFormModule,
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';
import { TbeDetailsComponent } from './tbe-details/tbe-details.component';
import { TbedashboardComponent } from './tbedashboard/tbedashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CreateNewTBEComponent,
    RefProjBiddersComponent,
    TbeDetailsComponent,
    TbedashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
		DxTextAreaModule,
		DxDateBoxModule,
    DxFormModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
