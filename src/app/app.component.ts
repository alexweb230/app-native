import { Component, OnInit, ViewChild } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent  {

    public sPlaceHolder: string = "пошук";

    public nList: string = "ssssssss";


    navLIst = [
        "новости",
        "аналітика",
        "Архів",
        "телеканал",
        "хроніки 112",
        "Досьє"
    ]

    // navList: [] = [
    //     {title: 'новости'},
    //     {title: 'аналітика'},
    //     {title: 'Архів'},
    //     {title: 'телеканал'},
    //     {title: 'хроніки 112'},
    //     {title: 'Досьє'}
    //
    // ]

}
