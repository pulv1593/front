import { useState, useEffect, useCallback } from 'react'
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import Result from './Result';
import CodeMirror from "@uiw/react-codemirror";
import './styles/Editor.css'; // Import the CSS file

function Editor(onSave) {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  const [srcCode, setSrcCode] = useState('');

// 기능1: result 컴포넌트에 editor에서 작성된 코드 넘겨주기
  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);
	
	// 	1.string(이거로 하기)  2.txt파일(X)
  useEffect(() => {
    const srcCodeUpdated = `
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
    `;
    setSrcCode(srcCodeUpdated);
  }, [html_edit, css_edit, js_edit]);

  console.log(srcCode);
	
// 	기능2: 작성된 코드를 txt 형식으로 백엔드 서버에 보내주기
	const saveCodeToBackend = async () => {
    try {
      const formData = new FormData();
      formData.append('html_txt', new Blob([html_edit], { type: 'text/plain' }), 'html.txt');
      formData.append('css_txt', new Blob([css_edit], { type: 'text/plain' }), 'css.txt');
      formData.append('js_txt', new Blob([js_edit], { type: 'text/plain' }), 'js.txt');

      const response = await axios.post('backend-uri/code', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Save response:', response.data);
    } catch (error) {
      console.error('Error saving code:', error);
    }
  };
	
  useEffect(() => {
    // 저장 버튼 클릭 시 코드를 백엔드에 저장
		onSave();
    saveCodeToBackend();
  }, [html_edit, css_edit, js_edit]);

// 	화면에 보여지는 코드 편집기 부분
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
