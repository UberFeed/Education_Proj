import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-list-of-definitions',
  templateUrl: './list-of-definitions.component.html',
  styleUrls: ['../../../general-style.css']
})
export class ListOfDefinitionsComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  @Output()
  NameComponent: string = "Список определений <dl>";

  @Output()
  interactiveExample: string = "<dl>\n  <dt>Сашими</dt>\n  <dd>Сырая рыба, нарезанная тонкими кусочками подается с такими приправами, как нашинкованная японская редька(дайкон), корень имбиря, васаби или соевый coyc.</dd>\n</dl>";

  @Output()
  staticExample1: string = "<dl>\n  <dt>Firefox</dt>\n  <dt>Mozilla Firefox</dt>\n  <dt>Fx</dt>\n  <dd>Бесплатный кроссплатформенный графический веб-браузер с открытым исходным кодом, разработанный корпорацией Mozilla и сотнями добровольцев.</dd>\n</dl>";

  @Output()
  staticExample2: string = "<dl>\n  <dt>Firefox</dt>\n  <dd>Бесплатный кроссплатформенный графический веб-браузер с открытым исходным кодом, разработанный корпорацией Mozilla и сотнями добровольцев.</dd>\n  <dd>Красная панда, также известная как Lesser Panda, Wah, Bear Cat или Firefox, является в основном травоядным млекопитающим, немного крупнее чем домашняя кошка(длиной 60 см).</dd>\n</dl>";

  @Output()
  staticExample3: string = "<dl>\n  <div>\n\t<dt>Name</dt>\n\t<dd>Godzilla</dd>\n  </div>\n  <div>\n\t<dt>Born</dt>\n\t<dd>1952</dd>\n  </div>\n</dl>";

  title: string = "Список определений";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-списки', path: 'html/basics' }
  ];

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
