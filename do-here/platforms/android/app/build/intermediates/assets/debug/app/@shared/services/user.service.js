"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var appSettings = require("application-settings");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = "http://192.168.14.82/api/Users";
        this.TokenUrl = "http://192.168.14.82/token";
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        console.log("you are going to use " + user.email + " as your Email");
        debugger;
        var req = this.http.post(this.serverUrl + "/PostUser", {
            username: user.email,
            email: user.email,
            password: user.password
        }).subscribe(function (res) {
            console.log(res);
            console.log("success!");
            var headers = new http_1.HttpHeaders();
            headers.set('Content-Type', 'application/x-www-urlencoded');
            var tokenReq = _this.http.post(_this.TokenUrl, 
            //  '{"grant_type=password&username="'+user.email+'"&password="'+user.password+'}'
            "grant_type=password&username=" + user.email + "&password=" + user.password, { headers: headers }).subscribe(function (res) {
                console.log('/token - Success', res);
                appSettings.setString("token", res.access_token);
            }, function (err) {
                console.error('/token - Error', err);
            });
        }, function (err) {
            console.log("Error occured " + " status: " + Response.error);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUMvRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUlwRDtJQUlFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztRQUM3QyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7SUFFUixDQUFDO0lBRXpDLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQStCQztRQTlCQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxRQUFRLENBQUM7UUFFVCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLEVBQUU7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FFeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsSUFBSSxPQUFPLEdBQWdCLElBQUksa0JBQVcsRUFBRSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDhCQUE4QixDQUFDLENBQUM7WUFDNUQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVE7WUFDM0Msa0ZBQWtGO1lBQ2xGLGtDQUFnQyxJQUFJLENBQUMsS0FBSyxrQkFBYSxJQUFJLENBQUMsUUFBVSxFQUN0RSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FFckIsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFFLFVBQUEsR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQ0EsQ0FBQztJQUdKLENBQUM7SUFyQ1UsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtlLGlCQUFVO09BSnpCLFdBQVcsQ0EwQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi92aWV3TW9kZWxzL3VzZXJWaWV3TW9kZWwvdXNlclZpZXdNb2RlbFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovLzE5Mi4xNjguMTQuODIvYXBpL1VzZXJzXCI7XG4gIHByaXZhdGUgVG9rZW5VcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjE0LjgyL3Rva2VuXCI7XG4gIHJvdXRlckV4dGVuc2lvbnM6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgY29uc29sZS5sb2coXCJ5b3UgYXJlIGdvaW5nIHRvIHVzZSBcIiArIHVzZXIuZW1haWwgKyBcIiBhcyB5b3VyIEVtYWlsXCIpO1xuICAgIGRlYnVnZ2VyO1xuXG4gICAgY29uc3QgcmVxID0gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5zZXJ2ZXJVcmx9L1Bvc3RVc2VyYCwge1xuICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICBcbiAgICB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhXCIpO1xuICAgICAgdmFyIGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LXVybGVuY29kZWQnKTtcbiAgICAgIGNvbnN0IHRva2VuUmVxID0gdGhpcy5odHRwLnBvc3QodGhpcy5Ub2tlblVybCxcbiAgICAgICAgLy8gICd7XCJncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPVwiJyt1c2VyLmVtYWlsKydcIiZwYXNzd29yZD1cIicrdXNlci5wYXNzd29yZCsnfSdcbiAgICAgICAgYGdyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHt1c2VyLmVtYWlsfSZwYXNzd29yZD0ke3VzZXIucGFzc3dvcmR9YCxcbiAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cblxuICAgICAgKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCcvdG9rZW4gLSBTdWNjZXNzJywgcmVzKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIiwgcmVzLmFjY2Vzc190b2tlbik7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCcvdG9rZW4gLSBFcnJvcicsIGVycilcbiAgICAgIH0pXG4gICAgfSwgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJlZCBcIiArIFwiIHN0YXR1czogXCIgKyBSZXNwb25zZS5lcnJvcik7XG4gICAgfVxuICAgICk7XG4gICAgXG5cbiAgfVxuXG4gIC8vICBsb2dpbih1c2VyOlVzZXIpe1xuICAvLyAgY29uc3QgcmVxID0gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCtcIi9HZXRVc2VyQnlJZFwiLClcbiAgLy8gIH1cbn1cbiJdfQ==