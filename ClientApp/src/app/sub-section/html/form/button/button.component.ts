import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../../general-style.css']
})
export class ButtonComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Управление формой";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  @Output()
  NameComponent: string = "Использование элемента <button>";

  @Output()
  interactiveExample: string = "<form id='registration'>\n  <label for='email'>Ваша почта:</label> <br/>\n  <input id='email' name='email' \n\t\t placeholder='Example@gmail.com' /> <br/>\n  <label for='pswrd'>Пароль:</label> <br/>\n  <input id='pswrd' name='pswrd' \n\t\t placeholder='Введите надежный пароль' />\n</form>\n<button form='registration' type ='submit'>\nОтправить</button><br/>\n<button form='registration' type='reset'> Сбросить</button>";

  @Output()
  staticExample1: string = "<button name='favorite' style='display: flex;'>\n  <svg aria-hidden='true' width='20' height='20' viewBox='0 0 10 10'>\n\t<path d='M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z'/>\n  </svg>\n  Add to favorites\n</button>";

  @Output()
  staticExample2: string = "<button type='button' onclick='alert(`Привет!`)'>Приветствие</button>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

}
