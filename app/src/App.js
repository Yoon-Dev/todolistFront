import React from 'react';
import Root from './page/Root';
import { TodoProvider } from './services/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Root/>
      </TodoProvider>    
    </div>
  );
}

export default App;
