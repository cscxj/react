import React from 'react';
import ReactDOM from 'react-dom/client';

console.log(React.version);
const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<div>app</div>);
}
