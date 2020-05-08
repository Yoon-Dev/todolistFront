import React, { useState } from 'react';
import Root from './page/Root';
import PrimaryButton from './components/PrimaryButton';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { TodoProvider } from './services/Todo';
import './App.css';
import { store } from './storage/store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

function App() {
  // const [isFormActive, setisFormActive] = useState(false);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
  return (
    <MuiThemeProvider theme={theme}>
      <div  className="App">
        <div>
          <Navbar/>
          <TodoProvider>
            <Root/>
          </TodoProvider>   
          <PrimaryButton/> 
        </div>
        <Form/>
      </div>
    </MuiThemeProvider>
  );
}
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: {
      main: '#f44336',
    },
  },
});
export default App;
