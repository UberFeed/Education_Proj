import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("codeMirror", { static: false })
  public codeMirror: ElementRef | undefined;


  HTML = document.createElement('div');
  CSS = document.createElement('div');

  @Input()
  InputValue: string = "";

  @Input()
  CSSInputValue: string = "";

  HTMLHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "#905" },
    { tag: tags.attributeName, color: "#690" },
    { tag: tags.attributeValue, color: "#0089c4" },
    { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
    { tag: tags.keyword, color: "#d78d7d" },
  ])

  CSSHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "rgb(215, 186, 125)" },
    { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
    { tag: tags.keyword, color: "#d78d7d" },
  ])

  HTMLstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), html(), css(), EditorView.lineWrapping,
    syntaxHighlighting(this.HTMLHighlightStyle),
    ],
  })

  CSSstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), css(), EditorView.lineWrapping,
    syntaxHighlighting(this.CSSHighlightStyle),
    ],
  })

  HTMLstartView!: EditorView;
  CSSstartView!: EditorView;

  ngOnInit(): void {
    if (this.InputValue!) {
      this.HTMLstartView = new EditorView({
        state: this.HTMLstartStateTemplate,
        parent: this.HTML,
      })

      this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, insert: this.InputValue } }))
    }

    else {
      this.CSSstartView = new EditorView({
        state: this.CSSstartStateTemplate,
        parent: this.CSS,
      })

      this.CSSstartView.dispatch(this.CSSstartView.state.update({ changes: { from: 0, insert: this.CSSInputValue } }))
    }
  }

  ngAfterViewInit() {
    if (this.InputValue!) {
      this.codeMirror!.nativeElement.append(this.HTML);
    }

    else {
      this.codeMirror!.nativeElement.append(this.CSS);
    }

  }

  CopyText() {
    console.log(this.codeMirror?.nativeElement.textContent);
    navigator.clipboard.writeText(this.codeMirror?.nativeElement.textContent);
  }
}

