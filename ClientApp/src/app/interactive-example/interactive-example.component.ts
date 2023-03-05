import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { autocompletion, closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap, history, indentWithTab } from "@codemirror/commands";
import { tags } from "@lezer/highlight";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

@Component({
  selector: 'app-interactive-example',
  templateUrl: './interactive-example.component.html',
  styleUrls: ['./interactive-example.component.css']
})
export class InteractiveExampleComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input()
  NameComponent!: string;

  @Input()
  HTMLinputValue: string = "";

  @Input()
  CSSinputValue: string = "";

  @Input()
  JSinputValue: string = "";

  HTMLactive: boolean = true;
  CSSactive: boolean = false;
  JSactive: boolean = false;

  @ViewChild("codeMirror", { static: false })
  codeMirror: ElementRef | undefined;

  @ViewChild("codeResult", { static: false })
  codeResult: ElementRef | undefined;

  htmlBlock = document.createElement('div');
  cssBlock = document.createElement('div');

  HTMLHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "#905" },
    { tag: tags.attributeName, color: "#690" },
    { tag: tags.attributeValue, color: "#0089c4" },
    { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
  ])

  CSSHighlightStyle = HighlightStyle.define([
    { tag: tags.tagName, color: "rgb(215, 186, 125)" },
    { tag: tags.propertyName, color: "rgb(156, 220, 254)" },
  ])

  startStateHTMLTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white", caretColor: "#0e9", width: "450px" },
      ".cm-gutters": { background: "#282a36", borderRight: "1px solid #454952", width: "30px", right: "0" },
      ".cm-gutter": { width: "25px" },
      ".cm-gutterElement": { padding: "0 !important" },
      ".cm-scroller": { height: "250px", overflow: "auto", paddingRight: "5px" },
      ".cm-tooltip": { background: "black" },
    }),
    lineNumbers(), EditorView.editable.of(true), html(),
      syntaxHighlighting(this.HTMLHighlightStyle), history(), autocompletion(), EditorView.lineWrapping,
      closeBrackets()
    ],
  })

  public HTMLstartView!: EditorView;

  startStateCSSTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white", caretColor: "#0e9", width: "450px" },
      ".cm-gutters": { background: "#282a36", borderRight: "1px solid #454952", width: "30px", right: "0" },
      ".cm-gutter": { width: "25px" },
      ".cm-gutterElement": { padding: "0 !important" },
      ".cm-scroller": { height: "250px", overflow: "auto", paddingRight: "5px" },
      ".cm-tooltip": { background: "black" },
    }),
    lineNumbers(), EditorView.editable.of(true), css(),
      syntaxHighlighting(this.CSSHighlightStyle), history(), autocompletion(), EditorView.lineWrapping,
      closeBrackets()
    ],
  })

  public CSSstartView!: EditorView;

  ngOnInit(): void {
    this.HTMLstartView = new EditorView({
      state: this.startStateHTMLTemplate,
      parent: this.htmlBlock,
    })

    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, insert: this.HTMLinputValue } }))

    if (this.CSSinputValue != '') {
      this.CSSstartView = new EditorView({
        state: this.startStateCSSTemplate,
        parent: this.cssBlock,
      })

      this.CSSstartView.dispatch(this.CSSstartView.state.update({ changes: { from: 0, insert: this.CSSinputValue } }))
      this.cssBlock.hidden = !this.CSSactive;
    }
  }

  ngAfterViewInit() {
    this.codeMirror?.nativeElement.append(this.htmlBlock);
    let concatStr = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      this.codeMirror?.nativeElement.append(this.cssBlock);
      concatStr += "<style>" + String(this.CSSstartView.state.doc) + "</style>";
    }

    this.codeResult?.nativeElement.setAttribute('srcdoc', concatStr);
  }

  ResetCode() {
    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, to: this.HTMLstartView.state.doc.length, insert: this.HTMLinputValue } }));
    let concatStr = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      this.CSSstartView.dispatch(this.CSSstartView.state.update({ changes: { from: 0, to: this.CSSstartView.state.doc.length, insert: this.CSSinputValue } }));
      concatStr += "<style>" + String(this.CSSstartView.state.doc) + "</style>";
    }

    this.codeResult?.nativeElement.setAttribute('srcdoc', concatStr);
  }

  ChangeCode() {
    let concatStr = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      concatStr += "<style>" + String(this.CSSstartView.state.doc) + "</style>";
    }

    this.codeResult?.nativeElement.setAttribute('srcdoc', concatStr);
  }

  HTMLswitch() {
    this.HTMLactive = true;
    this.CSSactive = false;
    this.JSactive = false;
    this.cssBlock.hidden = !this.CSSactive;
    this.htmlBlock.hidden = !this.HTMLactive;
  }

  CSSswitch() {
    this.HTMLactive = false;
    this.CSSactive = true;
    this.JSactive = false;
    this.cssBlock.hidden = !this.CSSactive;
    this.htmlBlock.hidden = !this.HTMLactive;
  }

  JSswitch() {
    this.HTMLactive = false;
    this.CSSactive = false;
    this.JSactive = true;
  }
}
