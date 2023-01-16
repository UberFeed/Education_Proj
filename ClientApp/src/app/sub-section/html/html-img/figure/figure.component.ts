import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['../../../general-style.css']
})
export class FigureComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Иллюстрации и подписи";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Изображения', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Добаление подписи к изображению";

  @Output()
  interactiveExample: string = "<figure>\n  <img src='/assets/img/index.jpg' alt='Фрукты' width='250'>\n  <figcaption>Фрукты</figcaption>\n</figure>";

  @Output()
  staticExample1: string = "<figure>\n  <img src='/assets/img/index.jp' alt='Пример без подписи' width='250'>\n</figure>\n\n<figure>\n  <img src='/assets/img/index.jp' alt='Пример с подписью' width='250'>\n  <figcaption>Фрукты</figcaption>\n</figure>";

  @Output()
  staticExample2: string = "<figure>\n  <figcaption>Получение информации о браузере с помощью navigator</figcaption>\n  <pre>\n\tfunction NavigatorExample() { \n\t  var txt;\n\t  txt='Browser CodeName:' + navigator.appCodeName + ';'\n\t  txt+= 'Browser Name: ' + navigator.appName + '; ';\n\t  txt+= 'Browser Version: ' + navigator.appVersion  + ';'\n\t  txt+= 'Cookies Enabled: ' + navigator.cookieEnabled  + '; \n  </pre>  \n</figure>";

  @Output()
  staticExample3: string = "<figure>\n  <figcaption><cite>Эдсгер Дейкстра.</cite></figcaption>\n  <blockquote>Если отладка — процесс удаления ошибок,<br>\n  то программирование должно быть процессом их внесения.</blockquote>\n</figure>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

  }

}
