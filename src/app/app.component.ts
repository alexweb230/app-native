import { Component, OnInit, ViewChild } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    public sPlaceHolder: string = 'пошук';

    navList: [] = [
        {title: 'новости'},
        {title: 'аналітика'},
        {title: 'Архів'},
        {title: 'телеканал'},
        {title: 'хроніки 112'},
        {title: 'хроніки 112'},
        {title: 'Досьє'}

    ]

}
