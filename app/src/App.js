import React from 'react';
import Root from './page/Root';
import PrimaryButton from './components/PrimaryButton';
import Form from './components/Form';
import { TodoProvider } from './services/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Root/>
      </TodoProvider>   
      <PrimaryButton/> 
      <Form/>
    </div>
  );
}

export default App;
