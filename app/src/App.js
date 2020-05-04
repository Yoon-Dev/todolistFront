import React, { useState } from 'react';
import Root from './page/Root';
import PrimaryButton from './components/PrimaryButton';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { TodoProvider } from './services/Todo';
import './App.css';
import { store } from './storage/store';

function App() {
  const [isFormActive, setisFormActive] = useState(false);
  store.subscribe(() => {
    if(store.getState().lastAction.slice(0, 5) !== "CLEAR" ){
      setisFormActive(true)
    }else{
      setisFormActive(false)
    }
})
  return (
    <div className="App">
      <Navbar state={isFormActive}/>
      <TodoProvider>
        <Root state={isFormActive}/>
      </TodoProvider>   
      <PrimaryButton state={isFormActive}/> 
      <Form/>
    </div>
  );
}

export default App;
