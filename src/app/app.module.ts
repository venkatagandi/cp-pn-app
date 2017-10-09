import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {GrowlModule,TreeTableModule,TreeNode,DataTableModule,SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './smaller-screens/menu/menu.component';
import { SubnavComponent } from './subnav/subnav.component';
import { ResourceinfoComponent } from './resourceinfo/resourceinfo.component';
import { NodeService } from "./node.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SubnavComponent,
    ResourceinfoComponent
  ],
  imports: [
    BrowserModule,
    TreeTableModule,
    SharedModule,
    HttpModule,
    GrowlModule,
    DataTableModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
