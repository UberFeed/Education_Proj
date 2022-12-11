import { Component, OnInit } from '@angular/core';
import { TransportData } from '../../../TrasportData.service';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-html-comp-text',
  templateUrl: './html-comp-text.component.html',
  styleUrls: ['../../../general-style.css']
})
export class HtmlCompTextComponent implements OnInit {

  constructor(
    private transportData: TransportData,
  ) { }

  title: string = "Элементы для ввода «компьютерного» текста";
  textPath: Array<object> = [
    { section: 'Раздел HTML', path: '/#part-1' },
    { section: 'HTML-текст', path: 'html/basics' }
  ];

  ngOnInit(): void {
    let headers = document.querySelectorAll("h2.head");
    this.transportData.changeTitle(this.title, headers, this.textPath);

    const MyHighlightStyle = HighlightStyle.define([
      { tag: tags.tagName, color: "#905" },
      { tag: tags.attributeName, color: "#690" },
      { tag: tags.attributeValue, color: "#0089c4" },
    ])

    let startStateTemplate = EditorState.create({
      extensions: [keymap.of(defaultKeymap), EditorView.theme({
        ".cm-content": { color: "white" },
        ".cm-gutters": { background: "#282a36", border: "none" },
        ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
      }),
      lineNumbers(), EditorView.editable.of(false), html(),
      syntaxHighlighting(MyHighlightStyle),
      ],
    })

    let startViewH1 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head1")!,
    })

    startViewH1.dispatch(startViewH1.state.update({ changes: { from: 0, insert: "<p>Для отладки в браузере используйте комбинацию <kbd>Ctrl+Shift+C</kbd></p>" } }))

    let startViewH2 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head2")!,
    })

    startViewH2.dispatch(startViewH2.state.update({ changes: { from: 0, insert: "Метод <code>push()</code> добавляет один или более элементов в конец массива" } }))


    let startViewH3 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head3")!,
    })

    startViewH3.dispatch(startViewH3.state.update({ changes: { from: 0, insert: "<samp>Нажмите F1 для продолжения</samp>" } }))

    let startViewH4 = new EditorView({
      state: startStateTemplate,
      parent: document.querySelector(".code-mirror.head4")!,
    })

    startViewH4.dispatch(startViewH4.state.update({ changes: { from: 0, insert: "<p>\n\tОбъем коробки равен <var>l</var> × <var>w</var> × <var>h</var>,\n\tгде <var>l</var> — длина, <var>w</var> — ширина, \n\tа <var>h</var> — высота коробки.\n</p>" } }))

    document.querySelector(".code-result.head1")?.insertAdjacentHTML('beforeend', String(startViewH1.state.doc));
    document.querySelector(".code-result.head2")?.insertAdjacentHTML('beforeend', String(startViewH2.state.doc));
    document.querySelector(".code-result.head3")?.insertAdjacentHTML('beforeend', String(startViewH3.state.doc));
    document.querySelector(".code-result.head4")?.insertAdjacentHTML('beforeend', String(startViewH4.state.doc));

  }

}
