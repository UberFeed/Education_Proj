import { Component, OnInit, Output, AfterViewInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../../general-style.css']
})
export class InputComponent implements OnInit, AfterViewInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Ввод данных";

  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Формы', path: 'html/basics' }
  ];

  inputRange!: HTMLInputElement;

  @Output()
  NameComponent: string = "Использование элемента <input>";

  @Output()
  interactiveExample: string = "<form>\n  <label for='FirstName'>Имя:</label> <br/>\n  <input id='FirstName' type='text'/> <br/>\n  <label for='LastName'>Фамилия</label> <br/>\n  <input id='LastName' type='text'/>\n</form>";

  @Output()
  staticExample1: string = "<form>\n  <input value='Кнопка' type='button'/>\n</form>";

  @Output()
  staticExample2: string = "<form>\n  <label>Где чаще всего вы слушаете музыку?</label> <br/>\n  <input id='home' type='checkbox'/>\n  <lable for='home'>Дома</lable> <br/>\n  <input id='outside' type='checkbox'/>\n  <lable for='outside'>На улице</lable> <br/>\n  <input id='job' type='checkbox'/>\n  <lable for='job'>На работе</lable>\n</form>";

  @Output()
  staticExample3: string = "<form>\n  <input type='color'/>\n</form>";

  @Output()
  staticExample4: string = "<form>\n  <label for='born-date1'>Укажите вашу дату рождения</label> <br/>\n  <input id='born-date1' type='date'/>\n</form>";

  @Output()
  staticExample5: string = "<form>\n  <label for='born-date2'>Укажите время и дату рождения</label> <br/>\n  <input id='born-date2' type='datetime-local'/>\n</form>";

  @Output()
  staticExample6: string = "<form>\n  <label for='email'>Укажите ваш адрес электронной почты</label> <br/>\n  <input placeholder='example@gmail.com' id='email' type='email'/>\n</form>";

  @Output()
  staticExample7: string = "<form>\n  <input type='file'/>\n</form>";

  @Output()
  staticExample8: string = "<form>\n  <input value='Первый input' type='text'/>\n  <input value='Второй input' type='hidden'/>\n  <input value='Третий input' type='text'/>\n</form>";

  @Output()
  staticExample9: string = "<form>\n  <p>Подпишитесь на рассылку наших новостей:</p>\n  <input placeholder='Ваша почта' type='text'/> <br/>\n  <input type='image' src='./assets/img/button.JPG' width='130' height='40'/>\n</form>";

  @Output()
  staticExample10: string = "<form>\n  <input type='month' placeholder='YYYY-MM'/>\n</form>";

  @Output()
  staticExample11: string = "<form>\n  <label for='age'>Сколько вам лет?</label> <br/>\n  <input id='age' type='number'/>\n</form>";

  @Output()
  staticExample12: string = "<form>\n  <labe for='login'>Введите логин:</label> <br/>\n  <input id='login' type='text'/> <br/>\n  <label for='password'>Ваш пароль:</label><br/>\n  <input id='password' type='password'/>\n</form>";

  @Output()
  staticExample13: string = "<form>\n  <label>Укажите ваш гендер: </label> <br/>\n  <input name='gender' id='male-gender' type='radio'/>\n  <label for='male-gender'>Мужской</label> <br/>\n  <input name='gender' id='female-gender' type='radio'/>\n  <label for='female-gender'>Женский</label> <br/>\n  <input name='gender' id='undefined-gender' type='radio'/>\n  <label for='undefined-gender'>Не указывать</label>\n</form>";

  @Output()
  staticExample14: string = "<form>\n  <label for='range-example'>Укажите нужное количество товара: </label>\n  <output id='rangeOut'></output> <br/>\n  <input id='rangeExample' type='range' value='30' min='0' max='100'/>\n</form>";

  @Output()
  staticExample15: string = "<form>\n  <label for='search'>Поиск:</label> <br/>\n  <input name='search' type='search' placeholder='Что вы хотите найти?'/>\n  <input type='button' value='Искать'>\n</form>";

  @Output()
  staticExample16: string = "<form>\n  <label for='tel'>Введите ваш номер телефона:</label> <br/>\n  <input name='search' type='tel' placeholder='+(380) XX XXX XX XX'/>\n</form>";

  @Output()
  staticExample17: string = "<form>\n  <label for='text'>\n\tВ данном поле можно хранить любую текстовую информацию:\n  </label> <br/>\n  <input id='text' type='text' placeholder='Какой прекрасный день!'/>\n</form>";

  @Output()
  staticExample18: string = "<form>\n  <label for='time'>Во сколько вы просыпаетесь по утрам?</label> <br/>\n  <input name='time' type='time'/>\n</form>";

  @Output()
  staticExample19: string = "<form>\n  <label for='url'>Данное поле предназначено для ссылок:</label> <br/>\n  <input name='url' type='url' placeholder='www.youtube.com/'/>\n</form>";

  @Output()
  staticExample20: string = "<form>\n  <label for='week'>Данное поле предназначено отображения недель:</label> <br/>\n  <input name='week' type='week' placeholder='YYYY-WW'/>\n</form>";

  @Output()
  staticExample21: string = "<form>\n  <input name='firstName' type='text' autocomplete='on' \n\t\t placeholder='Введите ваше имя'/> <br /> \n  <input name='lastName' type='text' autocomplete='on' \n\t\t placeholder='Введите вашу фамилию'/>\n</form>";

  @Output()
  staticExample22: string = "<form>\n  <input name='email' type='email' pattern='+@gmail\.com' required \n\t\t placeholder='Введите вашу почту'/> <br /> \n  <input type='submit' value='Отправить' />\n</form>";

  @Output()
  staticExample23: string = "<form>\n  <input type='number' step='10' value='5' max='30' min='0'/>\n</form>";

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);
  }

  ngAfterViewInit() {
    this.inputRange = document.querySelector('#rangeExample')!;
    let valueOut = document.querySelector('#rangeOut');
    valueOut!.textContent = this.inputRange.value;
    this.inputRange.addEventListener('input', () => {
      valueOut!.textContent = this.inputRange.value;
    })
  }
}
