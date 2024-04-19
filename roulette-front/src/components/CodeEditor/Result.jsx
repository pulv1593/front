
import './styles/Result.css'; // Import the CSS file

function Result({srcCode}) {
    return (
        <div>
            <div className="result-container">
                <h2 className="result-heading">
                    Output
                </h2>
                <iframe
                    className="result-iframe"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    );
}

export default Result;
