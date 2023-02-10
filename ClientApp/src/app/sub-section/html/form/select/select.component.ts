import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['../../../general-style.css']
})
export class SelectComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Раскрывающийся список";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <select>";

  @Output()
  interactiveExample: string = "<form>\n  <label for='pets'>Выбери своего питомца:</label> <br/>\n  <select id='pets'>\n\t<option selected disabled>Сделай свой выбор</option>\n\t<option value='cat'>Кот</option>\n\t<option value='dog'>Собака</option>\n\t<option value='parrot'>Попугай</option>\n\t<option value='hamster'>Хомяк</option>\n\t<option value='spider'>Паук</option>\n  </select>\n</form>";

  @Output()
  staticExample1: string = "<form>\n  <label for='pets-group'>Выбери любимых питомцев:</label> <br/>\n  <select multiple id='pets-group'>\n\t<option selected disabled>Сделай свой выбор</option>\n\t<optgroup label='Млекопипающие'>\n\t  <option value='cat'>Кот</option>\n\t  <option value='dog'>Собака</option>\n\t</optgroup>\n\t<optgroup label='Летающие'>\n\t  <option value='parrot'>Попугай</option>\n\t  <option value='owl'>Сова</option>\n\t</optgroup>\n  </select>\n</form>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
