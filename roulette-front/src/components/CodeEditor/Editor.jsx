import { useState, useEffect, useCallback } from 'react';
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import Result from './Result';
import CodeMirror from "@uiw/react-codemirror";

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

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-2">
          <h2 className="text-lg font-semibold text-white mb-2">HTML</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={html_edit}
            height="342px"
            theme="dark"
            extensions={[html(true)]}
            onChange={onChangeHtml}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-2">
          <h2 className="text-lg font-semibold text-white mb-2">CSS</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
            value={css_edit}
            height="342px"
            theme="dark"
            extensions={[css(true)]}
            onChange={onChangeCss}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-2">
          <h2 className="text-lg font-semibold text-white mb-2">JavaScript</h2>
          <CodeMirror
            className="text-xl border-gray-700 border"
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
  );
}

export default Editor;
