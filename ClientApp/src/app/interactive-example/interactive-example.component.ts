import { Component, Input, OnInit } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { autocompletion, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap, history, indentWithTab } from "@codemirror/commands";
import { tags } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-interactive-example',
  templateUrl: './interactive-example.component.html',
  styleUrls: ['./interactive-example.component.css']
})
export class InteractiveExampleComponent implements OnInit {

  constructor() { }

  @Input()
  HTMLinputValue: string = "";

  @Input()
  CSSinputValue: string = "";

  @Input()
  JSinputValue: string = "";

  HTMLactive: boolean = true;
  CSSactive: boolean = false;
  JSactive: boolean = false;

  MyHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "#905" },
    { tag: tags.attributeName, color: "#690" },
    { tag: tags.attributeValue, color: "#0089c4" },
  ])

  startStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white", caretColor: "#0e9", width: "450px" },
      ".cm-gutters": { background: "#282a36", borderRight: "1px solid #454952", width: "30px", right: "0" },
      ".cm-gutter": { width: "25px" },
      ".cm-gutterElement": { padding: "0 !important" },
      ".cm-scroller": { height: "250px", overflow: "auto", paddingRight: "5px" },
      ".cm-tooltip": { background: "black" },
    }),
    lineNumbers(), EditorView.editable.of(true), html(),
      syntaxHighlighting(this.MyHighlightStyle), history(), autocompletion(), EditorView.lineWrapping,
      closeBrackets()
    ],
  })

  public HTMLstartView!: EditorView;

  ngOnInit(): void {
    this.HTMLstartView = new EditorView({
      state: this.startStateTemplate,
      parent: document.querySelector(".html_editor")!,
    })

    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, insert: this.HTMLinputValue } }))
    document.querySelector(".output_tab")?.insertAdjacentHTML('beforeend', String(this.HTMLstartView.state.doc));
  }

  ResetCode() {
    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, to: this.HTMLstartView.state.doc.length, insert: this.HTMLinputValue } }))
    let temp = document.createElement("div");
    temp.insertAdjacentHTML('beforeend', String(this.HTMLstartView.state.doc));
    document.querySelector(".output_tab")?.replaceChildren(temp);
  }

  ChangeCode() {
    let temp = document.createElement("div");
    temp.insertAdjacentHTML('beforeend', String(this.HTMLstartView.state.doc));
    document.querySelector(".output_tab")?.replaceChildren(temp);
  }

  HTMLswitch() {
    this.HTMLactive = true;
    this.CSSactive = false;
    this.JSactive = false;
  }

  CSSswitch() {
    this.HTMLactive = false;
    this.CSSactive = true;
    this.JSactive = false;
  }

  JSswitch() {
    this.HTMLactive = false;
    this.CSSactive = false;
    this.JSactive = true;
  }
}
