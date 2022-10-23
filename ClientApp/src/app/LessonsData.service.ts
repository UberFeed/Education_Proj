import { Injectable } from '@angular/core';
import { HtmlBasicsComponent } from './sub-section/html/html-basics/html-basics.component';

@Injectable({
  providedIn: 'root',
})
export class LessonsData {
  html: object = {
    title: 'Разметка HTML',
    description: [
      'В данном разделе будут разобранны все составляющие элементы веб-страницы т.е разметка.',
      'Мы рассмотрим все основные и актуальные теги стандарта HTML5.'
    ],
    section: [
      {
        title: 'Основы HTML',
        subsection: [
          HtmlBasicsComponent
        ]
      }
    ],
  }
}
