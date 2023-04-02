import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { EditorStyle } from "src/app/services/HighlightStyle.service";

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {

  constructor(
    private EditorStyle: EditorStyle
  ) { }

  @ViewChild("codeMirror", { static: false })
  public codeMirror: ElementRef | undefined;


  HTML = document.createElement('div');
  CSS = document.createElement('div');

  @Input()
  InputValue: string = "";

  @Input()
  CSSInputValue: string = "";

  HTMLstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), html(), css(), EditorView.lineWrapping,
    syntaxHighlighting(this.EditorStyle.HighlightStyle.HTML),
    ],
  })

  CSSstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), css(), EditorView.lineWrapping,
    syntaxHighlighting(this.EditorStyle.HighlightStyle.CSS),
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

