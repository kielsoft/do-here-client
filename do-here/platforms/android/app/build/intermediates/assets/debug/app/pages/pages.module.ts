import { NgModule, OnInit } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { PagesRoutingModule } from "~/pages/pages.route";
import { PagesComponent } from "~/pages/pages.component";
import { SharedModule } from "~/@shared/shared.module";
import { LoginComponent } from "~/pages/login/login.component";
import { RegisterComponent } from "~/pages/register/register.component";
import { TaskListComponent } from "~/pages/task-list/task-list.component";

@NgModule({
    imports: [
        NativeScriptModule,
        PagesRoutingModule,
        SharedModule
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        RegisterComponent,
        TaskListComponent
    ],
})
export class PagesModule  {

}