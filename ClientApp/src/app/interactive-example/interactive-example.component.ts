import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { EditorState } from "@codemirror/state";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";
import { EditorView, keymap, lineNumbers } from "@codemirror/view";
import { defaultKeymap, history } from "@codemirror/commands";
import { highlightSelectionMatches } from "@codemirror/search";
import { syntaxHighlighting, bracketMatching} from "@codemirror/language";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { EditorStyle } from "src/app/services/HighlightStyle.service";

@Component({
  selector: 'app-interactive-example',
  templateUrl: './interactive-example.component.html',
  styleUrls: ['./interactive-example.component.css']
})
export class InteractiveExampleComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(
    private EditorStyle: EditorStyle
  ) { }

  @ViewChild("codeMirror", { static: false })
  codeMirror: ElementRef | undefined;

  @ViewChild("codeResult", { static: false })
  codeResult: ElementRef | undefined;

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

  HTMLoutput: string = "";
  CSSoutput: string = "";

  htmlBlock = document.createElement('div');
  cssBlock = document.createElement('div');

  public HTMLstartView!: EditorView;
  public CSSstartView!: EditorView;

  startStateHTMLTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white", caretColor: "#0e9", width: "450px" },
      ".cm-gutters": { background: "#282a36", borderRight: "1px solid #454952", width: "30px", right: "0" },
      ".cm-gutter": { width: "25px" },
      ".cm-gutterElement": { padding: "0 !important" },
      ".cm-scroller": { height: "250px", overflow: "auto", paddingRight: "5px" },
      ".cm-tooltip": { background: "black" },
      "&.cm-focused .cm-matchingBracket": { backgroundColor: "rgba(121, 124, 128, 0.5) !important" },
      ".cm-selectionMatch": { backgroundColor: "rgba(121, 124, 128, 0.6) !important" },
    }),
    lineNumbers(), EditorView.editable.of(true), html(),
      syntaxHighlighting(this.EditorStyle.HighlightStyle.HTML), history(), autocompletion(), EditorView.lineWrapping,
      closeBrackets(), bracketMatching(), highlightSelectionMatches(),
    ],
  })

  startStateCSSTemplate = EditorState.create({
    extensions: [keymap.of(defaultKeymap), EditorView.theme({
      ".cm-content": { color: "white", caretColor: "#0e9", width: "450px" },
      ".cm-gutters": { background: "#282a36", borderRight: "1px solid #454952", width: "30px", right: "0" },
      ".cm-gutter": { width: "25px" },
      ".cm-gutterElement": { padding: "0 !important" },
      ".cm-scroller": { height: "250px", overflow: "auto", paddingRight: "5px" },
      ".cm-tooltip": { background: "black" },
      "&.cm-focused .cm-matchingBracket": { backgroundColor: "#454952 !important" },
      ".cm-selectionMatch": { backgroundColor: "rgba(121, 124, 128, 0.6) !important" },
    }),
    lineNumbers(), EditorView.editable.of(true), css(),
      syntaxHighlighting(this.EditorStyle.HighlightStyle.CSS), history(), autocompletion(), EditorView.lineWrapping,
      closeBrackets(), bracketMatching(), highlightSelectionMatches(),
    ],
  })

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
    this.HTMLoutput = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      this.codeMirror?.nativeElement.append(this.cssBlock);
      this.CSSoutput = String(this.CSSstartView.state.doc);
    }

    this.ChangeResult();
  }

  ngAfterContentChecked() {
    let height = this.codeResult?.nativeElement.contentDocument.documentElement.offsetHeight;
    this.codeResult?.nativeElement.setAttribute('height', height);
  }

  ResetCode() {
    this.HTMLstartView.dispatch(this.HTMLstartView.state.update({ changes: { from: 0, to: this.HTMLstartView.state.doc.length, insert: this.HTMLinputValue } }));
    this.HTMLoutput = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      this.CSSstartView.dispatch(this.CSSstartView.state.update({ changes: { from: 0, to: this.CSSstartView.state.doc.length, insert: this.CSSinputValue } }));
      this.CSSoutput = String(this.CSSstartView.state.doc);
    }

    this.ChangeResult();
  }

  ChangeCode() {
    this.HTMLoutput = String(this.HTMLstartView.state.doc);

    if (this.CSSinputValue != '') {
      this.CSSoutput = String(this.CSSstartView.state.doc);
    }

    this.ChangeResult();
  }

  ChangeResult() {
    let Result = `<!DOCTYPE html><html><head><link href='./assets/example/CodeResult.css' rel='stylesheet'><style>${this.CSSoutput}</style></head><body>${this.HTMLoutput}</body></html>`;
    this.codeResult?.nativeElement.setAttribute('srcdoc', Result);

    let height = this.codeResult?.nativeElement.contentDocument.documentElement.offsetHeight;
    this.codeResult?.nativeElement.setAttribute('height', height);

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
