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
        {title: 'Краска, которой печатали защитные элементы на бюллетенях для президентских выборов, никому не продается, - ЦИК'},
        {title: 'Полиция открыла 189 уголовных производств за нарушения избирательного законодательства'},
        {title: 'В Одесской обл. СБУ ликвидировала канал контрабанды кокаина из страны Южной Америки'},
        {title: 'Группа "Время и Стекло" выпустила черно-белый клип на свою первую украиноязычную песню'},
        {title: 'Вступили в силу новые санкции Украины против лиц, причастных к российской агрессии'},
        {title: 'На печать бюллетеней для президентских выборов в Украине потратили более 165 млн грн, - ЦИК'},
        {title: 'Украина не заинтересована в китайских инвестициях? А зря'},
        {title: 'Карта ООС по состоянию на 21 марта'},
        {title: 'СБУ разоблачила антиукраинских интернет-агитаторов из Николаева и Одессы'},
        {title: 'Межбанк открылся долларом по 27,25-27,30 грн, евро – по 31,13-31,20 грн'},
    ]
    newsLis = [
       'test-1',
        'test-2',
        'test-3',
       'test-4'
    ]
}
