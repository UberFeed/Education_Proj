import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['../../../general-style.css']
})
export class BackgroundComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Оформление фона";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Цвет и фон', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Изменение цвета фона";

  @Output()
  HTMLinteractiveExample: string = "<p>Изменить цвет фона можно при помощи любого доступного цветового формата.</p>";

  @Output()
  CSSinteractiveExample: string = "p {\n  background-color: rgb(150, 30, 240, 0.5);\n}";

  @Output()
  HTMLstaticExample1: string = "<div class='background'></div>";

  @Output()
  CSSstaticExample1: string = ".background {\n  width: 250px;\n  height: 100px;\n  background: url(assets/img/mdn_logo.png) no-repeat, linear-gradient(white, black);\n  border: 1px solid #c4c4c4;\n}";

  @Output()
  HTMLstaticExample2: string = "<div class='background'></div>";

  @Output()
  CSSstaticExample2: string = ".background {\n  width: 250px;\n  height: 100px;\n  background: url(assets/img/mdn_logo.png) round;\n  border: 1px solid #c4c4c4;\n}";

  @Output()
  HTMLstaticExample3: string = "<div class='background'>\n  <div class='content'>Текст для наглядности. В зависимости от установленно значения будет прокручиваться вместе с изображением или без него.</div>\n</div>";

  @Output()
  CSSstaticExample3: string = ".background {\n  width: 250px;\n  height: 100px;\n  background: url(assets/img/mdn_logo.png) no-repeat;\n  background-attachment: local;\n  border: 1px solid #c4c4c4;\n  overflow: scroll;\n}\n\n.content {\n  width: 100%;\n  height: 300px;\n  background: rgba(0, 0, 0, 0.6);\n}";

  @Output()
  HTMLstaticExample4: string = "<div class='background'></div>";

  @Output()
  CSSstaticExample4: string = ".background {\n  width: 250px;\n  height: 100px;\n  background: url(assets/img/mdn_logo.png) no-repeat;\n  background-position: center top 20px;\n  border: 1px solid #c4c4c4;\n}";

  @Output()
  HTMLstaticExample5: string = "<div class='background'>\n  <div class='content'>Текст для наглядности. В зависимости от установленно значения фон будет заполнять только область контента т.е текст в данном случае.</div>\n</div>";

  @Output()
  CSSstaticExample5: string = ".background {\n  width: 250px;\n  height: 100px;\n  background: url(assets/img/mdn_logo.png);\n  background-clip: text;\n  border: 1px solid #c4c4c4;\n}\n\n.content {\n  width: 100%;\n  height: auto;\n  background: rgba(0, 0, 0, 0.6);\n}";

  @Output()
  HTMLstaticExample6: string = "<div class='background'>\n  <div class='content'>Текст для наглядности. В зависимости от установленно значения фон будет заполнять только область контента.</div>\n</div>";

  @Output()
  CSSstaticExample6: string = ".background {\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  background: url(assets/img/mdn_logo.png);\n  background-origin: content-box;\n  border: 1px solid #c4c4c4;\n}\n\n.content {\n  width: 100%;\n  height: 100px;\n  background: rgba(0, 0, 0, 0.6);\n}";

  @Output()
  HTMLstaticExample7: string = "<div class='background'></div>";

  @Output()
  CSSstaticExample7: string = ".background {\n  width: 250px;\n  height: 100px;\n  padding: 10px;\n  background: url(assets/img/mdn_logo.png) no-repeat;\n  background-size: cover;\n  border: 1px solid #c4c4c4;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

  }

}
