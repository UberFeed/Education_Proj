import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TransportData } from '../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
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

  ngOnInit() {
    let headers = document.querySelectorAll("h2.head");
    let head3_Content = document.createElement("div");
    let head4_Content = document.createElement("div");

    const MyHighlightStyle = HighlightStyle.define([
      { tag: tags.tagName, color: "#905" },
      { tag: tags.attributeName, color: "#690" },
      { tag: tags.attributeValue, color: "#0089c4" },
    ])

    let startStateH3 = EditorState.create({
      doc:
      "<html>\n\t" +
        "<body>\n\t\t" +
          "<h1>Это основной заголовок</h1>\n\t\t" +
          "<p>\n\t\t\t" +
            "Этот текст может быть введением к тексту, помещенному далее на странице. \n\t\t\t" +
            "В случае если текст достаточно длинный, он может быть разделен на несколько \n\t\t\t" +
            "разделов с подзаголовками.\n\t\t" +
          "</p> \n\t\t" +
          "<h2>Это подзаголовок</h2> \n\t\t" +
          "<p> \n\t\t\t" +
            "Часто при написании длинных статей используют подзаголовки, помогающие \n\t\t\t" +
            "читателям следить за структурой всего написанного. Иногда используются \n\t\t\t" +
             "и подзаголовки. \n\t\t" +
          "</p> \n\t" +
        "</body> \n" +
      "</html>"
      ,
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
        lineNumbers(), EditorView.editable.of(false), html(),
        syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH3,
      parent: head3_Content,
    })

    let startStateH4 = EditorState.create({
      doc: "<p lang='ru'>Текст на русском языке</p>",
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    new EditorView({
      state: startStateH4,
      parent: head4_Content,
    })

    document.querySelector(".code-mirror.head3")?.append(head3_Content);
    document.querySelector(".code-mirror.head4")?.append(head4_Content);

    this.transportData.changeTitle(this.title, headers, this.textPath);
  }
}
