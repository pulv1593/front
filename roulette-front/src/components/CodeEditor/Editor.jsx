import { useState, useEffect, useCallback } from 'react'
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import Result from './Result';
import CodeMirror from "@uiw/react-codemirror";
import './styles/Editor.css'; // Import the CSS file

function Editor() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  const [srcCode, setSrcCode] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  useEffect(() => {
    const srcCodeUpdated = `
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
    `;
    setSrcCode(srcCodeUpdated);
  }, [html_edit, css_edit, js_edit]);

  console.log(srcCode);

  return (
    <div>
      <div className="editor-container">
        <div className="editor-grid">
          <div className="editor">
            <h2 className="editor-title">HTML</h2>
            <CodeMirror
              className="editor-text"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className="editor">
            <h2 className="editor-title">CSS</h2>
            <CodeMirror
              className="editor-text"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className="editor">
            <h2 className="editor-title">JavaScript</h2>
            <CodeMirror
              className="editor-text"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </div>
  )
}

export default Editor;
