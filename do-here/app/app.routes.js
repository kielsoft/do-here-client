"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = require("~/@shared/services/auth-guard.service");
exports.AUTH_PROVIDERS = [
    auth_guard_service_1.AuthGuard
];
exports.APP_ROUTES = [
    { path: "", redirectTo: "/pages", pathMatch: "full" },
    { path: "**", redirectTo: "" },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBa0U7QUFFckQsUUFBQSxjQUFjLEdBQUc7SUFDMUIsOEJBQVM7Q0FDWixDQUFDO0FBQ1csUUFBQSxVQUFVLEdBQUc7SUFDdEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRTtDQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIn4vQHNoYXJlZC9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIX1BST1ZJREVSUyA9IFtcclxuICAgIEF1dGhHdWFyZFxyXG5dO1xyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvcGFnZXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgeyBwYXRoOiBcIioqXCIsIHJlZGlyZWN0VG86IFwiXCIgfSxcclxuXTsiXX0=