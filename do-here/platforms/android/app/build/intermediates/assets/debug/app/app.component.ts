import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    template: `<router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
    }


}
