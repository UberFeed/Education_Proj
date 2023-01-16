import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['../../../general-style.css']
})
export class AddImageComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Добавление изображений";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Изображения', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Добаление изображения на страницу";

  @Output()
  interactiveExample: string = "<img src='/assets/img/index.jpg' alt='Фрукты' width='250'>";

  @Output()
  staticExample1: string = "<img src='/assets/img/index.jp' alt='Данный текст появится в случае\n\t\t  ошибки загрузки изображения' width='250'>";

  @Output()
  staticExample2: string = "<a href='https://developer.mozilla.org'>\n  <img src='/assets/img/mdn_logo.png' alt='Посетить сайт MDN'>\n</a>";

  @Output()
  codeExample1: string = "<img src='mdn-logo-sm.png'\n\t alt='MDN'\n\t srcset='mdn-logo-HD.png 2x'>";

  @Output()
  codeExample2: string = " <img src='clock-demo-thumb-200.png'\n\t  alt='Часы'\n\t  srcset='clock-demo-thumb-200.png 200w,\n\t\t\t  clock-demo-thumb-400.png 400w'\n\t  sizes='(max-width: 600px) 200px, 50vw'>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
