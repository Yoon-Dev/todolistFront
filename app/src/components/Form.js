import React, { useState } from 'react';
import { store } from '../storage/store';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import { postTodoData, editTodo } from '../utils/data';
import PrimaryButton from './PrimaryButton';

const Form = () => {
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const [isTodoActive, setisTodoActive] = useState(store.getState().addtodo);
    store.subscribe(() => {
        setisTodoActive(store.getState().addtodo)
    })
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
        case isTodoActive:
            return(
                <Grid container className="abs form">
                    <Grid item xs={12}>
                        <TodoForm add={addDb} edit={store.getState().edit}/>
                        <PrimaryButton type="del"/>
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