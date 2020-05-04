import React from 'react';

function Code({name}) {
return <h3>I like {name}!</h3>
}
function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Code name = "react" />
      <Code name = "jango" />
      <Code name = "node.js" />
      <Code name = "python" />
    </div>
  );
}

export default App;
