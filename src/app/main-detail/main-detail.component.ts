import { Component, OnInit } from '@angular/core';


import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
  selector: 'ns-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css'],
  moduleId: module.id,
})
export class MainDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  test = "Фермер организовал целую операцию по выявлению того, кто убирает в сараеФермеру из Великобритании с уборкой в сарае помогает мышь.Фермер организовал целую операцию по выявлению того, кто убирает в сарае, после того как обнаружил, что разбросанные хозяйственные приспособления и инструменты сложены в ящик. Стивен МакКрис начал специально разбрасывать инструменты по сараю, чтобы убедиться, что на утро они все собраны в ящик. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь.";



}
