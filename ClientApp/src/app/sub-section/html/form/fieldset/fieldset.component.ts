import { Component, OnInit, Output } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['../../../general-style.css']
})
export class FieldsetComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Группировка элементов формы";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <fieldset>, <legend>";

  @Output()
  interactiveExample: string = "<form>\n <fieldset>\n\t<legend>Контактная информация:</legend>\n\t<label>Email:</label> <br/>\n\t<input type='email'> <br/>\n\t<label>Телефон:</label> <br/>\n\t<input type='tel'> <br/>\n\t<label>Факс:</label> <br/>\n\t<input type='text'> <br/>\n  </fieldset>\n</form>";

  @Output()
  staticExample1: string = "<form>\n <fieldset disabled>\n\t<legend>Личная информация:</legend>\n\t<label>Имя:</label> <br/>\n\t<input type='text'> <br/>\n\t<label>Фамилия:</label> <br/>\n\t<input type='text'>\n  </fieldset>\n</form>";

  @Output()
  staticExample2: string = "<form id='userInfo'>\n <fieldset>\n\t<legend>Контактная информация:</legend>\n\t<label>Email:</label> <br/>\n\t<input type='email'> <br/>\n\t<label>Телефон:</label> <br/>\n\t<input type='tel'> <br/>\n\t<label>Факс:</label> <br/>\n\t<input type='text'> <br/>\n  </fieldset>\n</form>\n\n <fieldset>\n\t<legend>Контактная информация:</legend>\n\t<label>Email:</label> <br/>\n\t<input type='email'> <br/>\n\t<label>Телефон:</label> <br/>\n\t<input type='tel'> <br/>\n\t<label>Факс:</label> <br/>\n\t<input type='text'> <br/>\n  </fieldset>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
