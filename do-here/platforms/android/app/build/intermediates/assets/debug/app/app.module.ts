import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/@shared/shared.module";
import { PagesModule } from "~/pages/pages.module";
import { APP_ROUTES } from "~/app.routes";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(APP_ROUTES),
        NativeScriptModule,
        NativeScriptFormsModule,
        SharedModule.forRoot(),
        PagesModule,
    ],
    declarations: [AppComponent,],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
