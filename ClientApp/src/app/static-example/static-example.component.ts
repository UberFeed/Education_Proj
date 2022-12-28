import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap, lineNumbers, } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { tags, Tag } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";


@Component({
  selector: 'app-static-example',
  templateUrl: './static-example.component.html',
  styleUrls: ['./static-example.component.css']
})
export class StaticExampleComponent implements OnInit {

  constructor() { }

  @ViewChild("nameText", { static: false })
  public codeMir!: ElementRef;

  temp: any;

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
    lineNumbers(), EditorView.editable.of(false), html(),
    syntaxHighlighting(this.MyHighlightStyle),
    ],
  })

  startView!: EditorView;

  ngOnInit(): void {
    this.startView = new EditorView({
      state: this.startStateTemplate,
      parent: this.temp,
    })

    console.log(this.codeMir?.nativeElement.textContent);
    if (this.codeMir) {
      this.codeMir.nativeElement.textContent = 'xyi';
    }
    //this.codeMir!.nativeElement.textContent = "hell";

    this.startView.dispatch(this.startView.state.update({ changes: { from: 0, insert: this.InputValue } }))
    document.querySelector(".code-result")?.insertAdjacentHTML('beforeend', this.InputValue);
  }

}


