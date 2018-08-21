import { NgModule, OnInit } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PagesRoutingModule } from "~/pages/pages.route";
import { PagesComponent } from "~/pages/pages.component";
import { SharedModule } from "~/@shared/shared.module";
import { LoginComponent } from "~/pages/login/login.component";
import { RegisterComponent } from "~/pages/register/register.component";
import { TaskListComponent } from "~/pages/task-list/task-list.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NewTaskComponent } from "~/pages/new-task/new-task.component";
import { MapComponent } from "~/pages/map/map.component";



@NgModule({
    
    imports: [
        NativeScriptModule,
        PagesRoutingModule,
        NativeScriptFormsModule,
        SharedModule,
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent,
        TaskListComponent,
        NewTaskComponent,
        MapComponent
        
    ],
})
export class PagesModule  {

}