import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("codeMirror", { static: false })
  public codeMirror: ElementRef | undefined;


  temp = document.createElement('div');

  @Input()
  InputValue: string = "";

  MyHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "#905" },
    { tag: tags.attributeName, color: "#690" },
    { tag: tags.attributeValue, color: "#0089c4" },
  ])

  startStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), html(), EditorView.lineWrapping,
    syntaxHighlighting(this.MyHighlightStyle),
    ],
  })

  startView!: EditorView;

  ngOnInit(): void {
    this.startView = new EditorView({
      state: this.startStateTemplate,
      parent: this.temp,
    })

    this.startView.dispatch(this.startView.state.update({ changes: { from: 0, insert: this.InputValue } }))
  }

  ngAfterViewInit() {
    this.codeMirror!.nativeElement.append(this.temp);
  }

  CopyText() {
    console.log(this.codeMirror?.nativeElement.textContent);
    navigator.clipboard.writeText(this.codeMirror?.nativeElement.textContent);
  }
}

