import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-selector-group',
  templateUrl: './selector-group.component.html',
  styleUrls: ['../../../general-style.css']
})
export class SelectorGroupComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Комбинация и группировка селекторов";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Селекторы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование комбинации различных селекторов";

  @Output()
  HTMLinteractiveExample: string = "<p class='my-class'>Этот абзац имеет класс 'my-class' и будет стилизован с помощью CSS.</p>\n\n<p>Этот абзац не содержит класса.</p>\n\n<p class='my-class'>Этот абзац также имеет класс 'my-class' и будет стилизован так же, как и предыдущий абзац.</p>\n\n<p id='my-id'>Этот абзац имеет идентификатор 'my-id' и будет стилизован с помощью CSS.</p>";

  @Output()
  CSSinteractiveExample: string = "p.my-class {\n  color: grey; \n}\n\np#my-id {\n  color: red; \n}";

  @Output()
  HTMLstaticExample1: string = "<p>Этот абзац <span class='my-class'>имеет</span> элемент span и будет стилизован с помощью CSS.</p>\n\n<p>Этот абзац также имеет элемент span и будет <span class='my-class'>стилизован</span> с помощью CSS.</p>";

  @Output()
  CSSstaticExample1: string = "p span.my-class {\n  color: red;\n}";

  @Output()
  HTMLstaticExample2: string = "<button class='my-class'>Наведите курсор на кнопку</button>";

  @Output()
  CSSstaticExample2: string = "button {\n  color: black; \n}\n\nbutton.my-class:hover {\n  color: red;\n}";

  @Output()
  HTMLstaticExample3: string = "<h1>Заголовок 1-го уровня</h1>\n\n<h2>Заголовок 2-го уровня</h2>\n\n<h3>Заголовок 3-го уровня</h3>";

  @Output()
  CSSstaticExample3: string = "h1,h2,h3 {\n  color: red; \n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
