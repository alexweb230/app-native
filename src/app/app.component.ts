import {Component, OnInit, ViewChild} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    public sPlaceHolder: string = "пошук";

    public textLive: string = "live";



    navLIst = [
        "новости",
        "аналітика",
        "Архів",
        "телеканал",
        "хроніки 112",
        "Досьє"
    ]
}
