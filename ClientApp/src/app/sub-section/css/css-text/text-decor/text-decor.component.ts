import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-text-decor',
  templateUrl: './text-decor.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TextDecorComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Оформление текста";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Текст', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример оформления текста";

  @Output()
  HTMLinteractiveExample: string = "<p>Данный текст будет оформлен при помощи волнистой линии подчеркивания</p>";

  @Output()
  CSSinteractiveExample: string = "p {\n  text-decoration: underline wavy yellow;\n}";

  @Output()
  HTMLstaticExample1: string = "<p class='underline'>Для данного текста будет применяться нижнее подчеркивание с перекрытием засечек и хвостов символов.</p>\n\n<p class='underover'>Текст с верхним и нижним перечеркиванием.</p>\n\n<p class='line-through'>Этот текст будет перечеркнут.</p>";

  @Output()
  CSSstaticExample1: string = ".underline {\n  text-decoration: underline yellow;\n  text-decoration-skip-ink: none;\n}\n\n  .underover {\n  text-decoration: underline overline yellow wavy;\n}\n\n  .line-through {\n  text-decoration: line-through yellow dashed;\n}";

  @Output()
  HTMLstaticExample2: string = "<p class='uppercase'>Каждый символ данного текста будет переведен в регистр верхнего уровня.</p>\n\n<p class='capitalize'>Каждый первый символ в данном тексте будет прописным.</p>";

  @Output()
  CSSstaticExample2: string = ".uppercase {\n  text-transform: uppercase;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}";

  @Output()
  HTMLstaticExample3: string = "<p class='shadow'>Использование теней</p>\n\n<p class='shadow2'>Использование теней</p>";

  @Output()
  CSSstaticExample3: string = ".shadow {\n  text-shadow: #FC0 1px 0 10px;\n}\n\n.shadow2 {\n  text-shadow: red 5px 10px;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }
}
