"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routes_1 = require("~/app.routes");
var user_service_1 = require("./services/user.service");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: app_routes_1.AUTH_PROVIDERS.concat([user_service_1.UserService])
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [],
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBOEQ7QUFDOUQsMkNBQThDO0FBQzlDLHdEQUFzRDtBQU10RDtJQUFBO0lBT0EsQ0FBQztxQkFQWSxZQUFZO0lBQ2Qsb0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBTSwyQkFBYyxTQUFFLDBCQUFXLEVBQUM7U0FDOUMsQ0FBQztJQUNOLENBQUM7SUFOUSxZQUFZO1FBSnhCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztPQUNXLFlBQVksQ0FPeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQVVUSF9QUk9WSURFUlMgfSBmcm9tIFwifi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgZXhwb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbLi4uQVVUSF9QUk9WSURFUlMsIFVzZXJTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==