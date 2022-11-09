import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../TrasportData.service';

@Component({
  selector: 'app-html-tab-body',
  templateUrl: './html-tab-body.component.html',
  styleUrls: ['../../general-style.css','./html-tag-body.component.css']
})
export class HtmlTagBodyComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Элемент <body>";
  textPath: Array<object> = [
    { section: 'Основы HTML', path: 'html/tagBody' }
  ];

  ngOnInit() {
    let headers = document.querySelectorAll("h2.head");

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
