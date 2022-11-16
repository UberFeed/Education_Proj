import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { LessonsData } from '../../../LessonsData.service';
import { TransportData } from '../../TrasportData.service';

@Component({
  selector: 'app-html-basics',
  templateUrl: './html-basics.component.html',
  styleUrls: ['../../general-style.css', './html-basics.component.css']
})
export class HtmlBasicsComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Структура HTML-документа";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Основы HTML', path: 'html/basics' }
  ];

  ngOnInit() {
    let headers = document.querySelectorAll("h2.head");

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }
}
