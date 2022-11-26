import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { LessonsData } from '../../../LessonsData.service';
import { TransportData } from '../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { language } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-html-basics',
  templateUrl: './html-basics.component.html',
  styleUrls: ['../../general-style.css', './html-basics.component.css']
})
export class HtmlBasicsComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Структура HTML-документа";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'Основы HTML', path: 'html/basics' }
  ];

  //temp: any = document.querySelector(".code-mirror"); #d4d6db

  ngOnInit() {
    let headers = document.querySelectorAll("h2.head");
    let temp = document.createElement("div");

    let startState = EditorState.create({
      doc: "<html>\n</html>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
        lineNumbers(), EditorView.editable.of(false), html()
      ],
    })

    let view = new EditorView({
      state: startState,
      parent: temp,
    })

    document.querySelector(".code-mirror")?.append(temp);

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }
}
