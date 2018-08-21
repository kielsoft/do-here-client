"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pages_route_1 = require("~/pages/pages.route");
var pages_component_1 = require("~/pages/pages.component");
var shared_module_1 = require("~/@shared/shared.module");
var login_component_1 = require("~/pages/login/login.component");
var register_component_1 = require("~/pages/register/register.component");
var task_list_component_1 = require("~/pages/task-list/task-list.component");
var forms_1 = require("nativescript-angular/forms");
var new_task_component_1 = require("~/pages/new-task/new-task.component");
var map_component_1 = require("~/pages/map/map.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                pages_route_1.PagesRoutingModule,
                forms_1.NativeScriptFormsModule,
                shared_module_1.SharedModule,
            ],
            declarations: [
                pages_component_1.PagesComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                task_list_component_1.TaskListComponent,
                new_task_component_1.NewTaskComponent,
                map_component_1.MapComponent
            ],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdGQUE4RTtBQUM5RSxtREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDZFQUEwRTtBQUMxRSxvREFBcUU7QUFDckUsMEVBQXVFO0FBQ3ZFLDJEQUF5RDtBQXNCekQ7SUFBQTtJQUVBLENBQUM7SUFGWSxXQUFXO1FBbEJ2QixlQUFRLENBQUM7WUFFTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixnQ0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLHVDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQiw0QkFBWTthQUVmO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMucm91dGVcIjtcbmltcG9ydCB7IFBhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwifi9Ac2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFza0xpc3RDb21wb25lbnQgfSBmcm9tIFwifi9wYWdlcy90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5ld1Rhc2tDb21wb25lbnQgfSBmcm9tIFwifi9wYWdlcy9uZXctdGFzay9uZXctdGFzay5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL21hcC9tYXAuY29tcG9uZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBQYWdlc1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFnZXNDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgVGFza0xpc3RDb21wb25lbnQsXG4gICAgICAgIE5ld1Rhc2tDb21wb25lbnQsXG4gICAgICAgIE1hcENvbXBvbmVudFxuICAgICAgICBcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSAge1xuXG59Il19