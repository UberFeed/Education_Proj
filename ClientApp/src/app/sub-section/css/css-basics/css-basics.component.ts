import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../TrasportData.service';

@Component({
  selector: 'app-css-basics',
  templateUrl: './css-basics.component.html',
  styleUrls: ['../../general-style.css']
})
export class CssBasicsComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Введение в CSS";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Основы CSS', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование каскадных таблиц стилей";

  @Output()
  HTMLinteractiveExample: string = "<h1>С огорода на тарелку</h1>\n<p>Potager в переводе с французского языка означает оrород. Часто цветы (съедобные и несъедобные), а также травы сажают вместе с овощами для красоты сада. Цель состоит в том, чтобы придать эстетичность функции обеспечения продовольствием.</p>";

  @Output()
  CSSinteractiveExample: string = "h1 {\n  color: red;\n}";

  @Output()
  CodeExample1: string = "h1 {\n  color: red;\n}";

  @Output()
  CodeExample2: string = "<head>\n  <link rel='stylesheet' href='css/style.css'>\n  <link rel='stylesheet' href='css/assets.css' media='all'>\n</head>";

  @Output()
  CodeExample3: string = "<head>\n  <style>\n\th1,h2 {\n\t  color: red;\n\t  line-height: 1.3em;\n\t}\n  </style>\n</head>\n<body>\n  ...\n</body>";

  @Output()
  CodeExample4: string = "<p style='font-weight: bold; color: red;'>Обратите внимание на этот текст</p>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
