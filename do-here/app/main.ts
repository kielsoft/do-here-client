// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import { enableProdMode } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";

//enableProdMode();

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

import * as platform from "platform";
declare var GMSServices: any;

if (platform.isIOS) {
    GMSServices.provideAPIKey("YOUR_GOOGLE_API_KEY_HERE");
}

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(AppModule);
