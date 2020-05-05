import React from 'react';
import { store } from '../storage/store';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import { postTodoData, editTodo } from '../utils/data';

const Form = props => {
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const addDb = (type, value, id = null) => {
        switch (type) {
            case 'todo':
                postTodoData(process.env.REACT_APP_API_ADDTODO, value)
                break;
            case 'edittodo':
                editTodo(process.env.REACT_APP_API_EDITTODO, value, id)
                break;
            case 'label':
                break;
            default:
                alert(`Il c'est produit une erreur désolé`)
                break;
        }
        // store.dispatch({type: "CLEAR"})
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    switch (true) {
        case props.in:
            return(
                <Grid container className="abs form">
                    <Grid item xs={10}>
                        <TodoForm add={addDb} edit={store.getState().edit}/>
                    </Grid>
                </Grid>  
            )
        default:
            return(
                null
            )
    }
}

export default Form;