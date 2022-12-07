import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-html-headlines',
  templateUrl: './html-headlines.component.html',
  styleUrls: ['../../../general-style.css']
})
export class HtmlHeadlinesComponent implements OnInit {

  constructor(private transportData: TransportData) { }

  title: string = "Заголовки";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-текст', path: 'html/basics' }
  ];

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

    // Родительские элементы для вставки mirrorcode
    let head1_content = document.createElement("div");
    let head2_content = document.createElement("div");
    let head3_content = document.createElement("div");
    let head4_content = document.createElement("div");

    const MyHighlightStyle = HighlightStyle.define([
      { tag: tags.tagName, color: "#905" },
      { tag: tags.attributeName, color: "#690" },
      { tag: tags.attributeValue, color: "#0089c4" },
    ])

    let startStateH1 = EditorState.create({
      doc: "<h1>Основной заголовок</h1>",
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
      state: startStateH1,
      parent: head1_content,
    })

    let startStateH2 = EditorState.create({
      doc: "<h2>Заголовок 2-го уровня</h2>",
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
      state: startStateH2,
      parent: head2_content,
    })

    let startStateH3 = EditorState.create({
      doc: "<h3>Заголовок 3-го уровня</h3>",
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
      parent: head3_content,
    })

    let startStateH4 = EditorState.create({
      doc: "<h4>Заголовок 4-го уровня</h4>" + "\n" +
        "<h5>Заголовок 5-го уровня</h5>" + "\n" +
        "<h6>Заголовок 6-го уровня</h6>",
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
      parent: head4_content,
    })

    // Вывод исходного кода в соответствующие заголовки
    document.querySelector(".code-mirror.head1")?.append(head1_content);
    document.querySelector(".code-mirror.head2")?.append(head2_content);
    document.querySelector(".code-mirror.head3")?.append(head3_content);
    document.querySelector(".code-mirror.head4")?.append(head4_content);

    // Вывод результата в соответствующие заголовки
    let resultH1code = document.createElement("div");
    resultH1code.insertAdjacentHTML('beforeend', String(startStateH1.doc));
    document.querySelector(".code-result.head1")?.append(resultH1code);

    let resultH2code = document.createElement("div");
    resultH2code.insertAdjacentHTML('beforeend', String(startStateH2.doc));
    document.querySelector(".code-result.head2")?.append(resultH2code);

    let resultH3code = document.createElement("div");
    resultH3code.insertAdjacentHTML('beforeend', String(startStateH3.doc));
    document.querySelector(".code-result.head3")?.append(resultH3code);

    let resultH4code = document.createElement("div");
    resultH4code.insertAdjacentHTML('beforeend', String(startStateH4.doc));
    document.querySelector(".code-result.head4")?.append(resultH4code);

  }

}
