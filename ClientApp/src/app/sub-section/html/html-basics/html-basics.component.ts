import { Component, OnInit } from '@angular/core';
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
    { section: 'Основы HTML', path: 'html/basics' }
  ];

  ngOnInit() {
    let headers = document.querySelectorAll("h1.head");

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
