import React, { useState } from 'react';
import Root from './page/Root';
import PrimaryButton from './components/PrimaryButton';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { TodoProvider } from './services/Todo';
import './App.css';
import { store } from './storage/store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';

function App() {
  const [isFormActive, setisFormActive] = useState(false);
  store.subscribe(() => {
    if(store.getState().lastAction.slice(0, 5) !== "CLEAR" ){
      setisFormActive(true)
    }else{
      setisFormActive(false)
    }
})
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
  return (
    <MuiThemeProvider theme={theme}>
      <div  className="App">
        <div className={isFormActive ? "form-active trans-form" : "trans-form"}>
          <Navbar/>
          <TodoProvider>
            <Root/>
          </TodoProvider>   
          <PrimaryButton click={() => setisFormActive(true)}/> 
        </div>
        <Form in={isFormActive}/>
      </div>
    </MuiThemeProvider>
  );
}
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: {
      main: '#f44336',
    },
  },
});
export default App;
