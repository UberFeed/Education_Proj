import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../TrasportData.service';

@Component({
  selector: 'app-html-tag-head',
  templateUrl: './html-tag-head.component.html',
  styleUrls: ['../../general-style.css','./html-tag-head.component.css']
})
export class HtmlTagHeadComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Элемент <head>";
  textPath: Array<object> = [
    { section: 'Основы HTML', path: 'html/tagHead' }
  ];

  ngOnInit() {
    let headers = document.querySelectorAll("h2.head");

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
