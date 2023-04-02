import { Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { syntaxHighlighting } from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { EditorStyle } from "src/app/services/HighlightStyle.service";

@Component({
  selector: 'app-static-example',
  templateUrl: './static-example.component.html',
  styleUrls: ['./static-example.component.css']
})
export class StaticExampleComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(
    private EditorStyle: EditorStyle
  ) { }

  @ViewChild("HTMLcodeMirror", { static: false })
  public HTMLcodeMirror: ElementRef | undefined;

  @ViewChild("CSScodeMirror", { static: false })
  public CSScodeMirror: ElementRef | undefined;

  @ViewChild("codeResult", { static: false })
  public codeResult: ElementRef | undefined;

  @Input()
  CodeResultVisible: boolean = true;

  @Input()
  InputValue: string = "";

  @Input()
  CSSInputValue: string = "";

  CSScodeVisible: boolean = false;

  htmlBlock = document.createElement('div');
  cssBlock = document.createElement('div');

  HTMLoutput: string = "";
  CSSoutput: string = "";

  HTMLstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" }
    }),
    EditorView.editable.of(false), html(), EditorView.lineWrapping,
    syntaxHighlighting(this.EditorStyle.HighlightStyle.HTML),
    ],
  })

  CSSstartStateTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white" },
      ".cm-gutters": { background: "#282a36", border: "none" },
      ".cm-gutterElement": { padding: "0 10px 0 5px !important" },
      ".cm-identifier.cm-definition": { color: "black" }
    }),
    EditorView.editable.of(false), css(), EditorView.lineWrapping,
      syntaxHighlighting(this.EditorStyle.HighlightStyle.CSS),
    ],
  })

  HTMLstartView!: EditorView;
  CSSstartView!: EditorView;

  ngOnInit(): void {
    this.HTMLstartView = new EditorView({
      state: this.HTMLstartStateTemplate,
      parent: this.htmlBlock,
    })

    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, insert: this.InputValue } }))

    if (this.CSSInputValue!) {
      this.CSScodeVisible = !this.CSScodeVisible;
      this.CSSstartView = new EditorView({
        state: this.CSSstartStateTemplate,
        parent: this.cssBlock,
      })

      this.CSSstartView.dispatch(this.CSSstartView.state.update({ changes: { from: 0, insert: this.CSSInputValue } }))
    }
  }

  ngAfterViewInit() {
    this.HTMLcodeMirror!.nativeElement.append(this.htmlBlock);
    this.HTMLoutput = String(this.HTMLstartView.state.doc);

    if (this.CSSInputValue!) {
      this.CSScodeMirror?.nativeElement.append(this.cssBlock);
      this.CSSoutput = String(this.CSSstartView.state.doc);
    }

    let Result = `<!DOCTYPE html><html><head><link href='./assets/example/CodeResult.css' rel='stylesheet'><style>${this.CSSoutput}</style></head><body>${this.HTMLoutput}</body></html>`;
    this.codeResult?.nativeElement.setAttribute('srcdoc', Result);
  }

  ngAfterViewChecked() {
    let height = this.codeResult?.nativeElement.contentDocument.documentElement.offsetHeight;
    this.codeResult?.nativeElement.setAttribute('height', height);
  }

}


