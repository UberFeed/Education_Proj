import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['../../../general-style.css']
})
export class InheritanceComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Наследование и каскад";

  textPath: Array<object> = [
    { section: 'Раздел CSS', path: '/#part-1' },
    { section: 'Селекторы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Пример наследования свойств";

  @Output()
  HTMLinteractiveExample: string = "<div class='container'>\n  <p>Этот текст будет красным.</p>\n  <p class='grey'>Этот текст будет серым.</p>\n</div>";

  @Output()
  CSSinteractiveExample: string = ".container {\n  color: red;\n}\n\np {\n  color: inherit;\n}\n\np.grey {\n  color: grey;\n}";

  @Output()
  HTMLstaticExample1: string = "<h1>Картофель</h1>\n\n<p id='intro'>Cyщecтвyют <i>десятки</i> сортов <b>картофеля</b>.</р>\n\n<p>Обычно они подразделяются на ранние, среднеранние и поздние.</p>";

  @Output()
  CSSstaticExample1: string = "* {\n  font-family: Arial, Verdana, sans-serif;\n}\n\nh1 {\n  font-family: 'Courier New', monospace;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\ni {\n  color: green;\n}\n\ni {\n  color: red;\n}\n\nb {\n  color: pink;\n}\n\nр b {\n  color: blue !important;\n}\n\nр b {\n  color: violet;\n}\n\np#intro {\n  font-size: 100%;\n}\n\nр {\n  font-size: 75%;\n}";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
