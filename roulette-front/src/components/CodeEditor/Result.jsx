
function Result({srcCode}) {
    return (
        <div>
            <div className="bg-gray-800 p-4 shadow-lg mt-4 rounded-lg">
                <h2 className="text-lg font-semibold text-white mb-2">
                    Output
                </h2>
                <iframe
                    className="bg-white w-full h-150 border border-gray-700 rounded-md"
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
