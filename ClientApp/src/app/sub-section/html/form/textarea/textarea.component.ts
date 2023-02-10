import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['../../../general-style.css']
})
export class TextareaComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Текстовая область";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <textarea>";

  @Output()
  interactiveExample: string = "<form>\n  <label for='story'>\n\tРаскажите нам свою историю:\n  </label> <br/>\n  <textarea id='story' name='story' rows='5' cols='25' \n\tplaceholder='Это была темная и штормовая ночь...'></textarea>\n</form>";

  @Output()
  staticExample1: string = "<form>\n  <input value='Кнопка' type='button'/>\n</form>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }
}
