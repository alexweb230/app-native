import {Component, OnInit} from '@angular/core';
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: 'ns-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    moduleId: module.id,
})
export class MainComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    test = 'wwwwwwwwwwww';
    newsListMain = [
        {title: 'test-1'},
        {title: 'test-2'},
        {title: 'test-3'},
        {title: 'test-4'},
        {title: 'test-4'},
        {title: 'test-4'},
        {title: 'test-4'},
        {title: 'test-4'},
        {title: 'test-4'},
        {title: 'test-4'},
    ]
    newsLis = [
       'test-1',
        'test-2',
        'test-3',
       'test-4'
    ]
}
