import React from "react";

function App() {
  return (
    <div className="p-4 bg-gray-100 w-[200px] h-[200px]">
      <iframe
        src="test.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
}

export default App;
