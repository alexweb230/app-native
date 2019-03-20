import {Component, OnInit, ViewChild} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public sPlaceHolder: string = "пошук";

    public textLive: string = "live";

    public textUA: string = "украiнська";

    public textRU: string = "pociйська";

    active: boolean = true;
    activeSibling: boolean = false;

    toggleActive(){
        this.active = !this.active;
        this.activeSibling = !this.activeSibling;

    }

    navLIst = [
        "новости",
        "аналітика",
        "Архів",
        "телеканал",
        "хроніки 112",
        "Досьє"
    ]
}
