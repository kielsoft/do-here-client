"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var taskViewModel_1 = require("~/@shared/viewModels/taskViewModel/taskViewModel");
var router_1 = require("nativescript-angular/router");
var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.task = new taskViewModel_1.Task();
    }
    NewTaskComponent.prototype.ngOnInit = function () { };
    NewTaskComponent.prototype.create = function () {
        console.log(this.task.Name);
        console.log(this.task.Description);
    };
    NewTaskComponent.prototype.moveToMap = function () {
        console.log("tap");
        this.routerExtensions.navigate(["../map"]);
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-task',
            templateUrl: './new-task.component.html',
            styleUrls: ['./new-task.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUF3RTtBQUN4RSxzREFBK0Q7QUFRL0Q7SUFHRSwwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUYsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFDWixpQ0FBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQWhCUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBSXNDLHlCQUFnQjtPQUgzQyxnQkFBZ0IsQ0FpQjFCO0lBQUQsdUJBQUM7Q0FBQSxBQWpCSCxJQWlCRztBQWpCVSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJ34vQHNoYXJlZC92aWV3TW9kZWxzL3Rhc2tWaWV3TW9kZWwvdGFza1ZpZXdNb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW5ldy10YXNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy10YXNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LXRhc2suY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdUYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGFzazpUYXNrO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMudGFzaz0gbmV3IFRhc2soKTtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuICAgIGNyZWF0ZSgpe1xuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrLk5hbWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrLkRlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBtb3ZlVG9NYXAoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFwXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vbWFwXCJdKTtcbiAgICB9XG4gIH0iXX0=