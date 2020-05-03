import React, { useState } from 'react';
import { store } from '../storage/store';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import { postTodoData, editTodo } from '../utils/data';

const Form = () => {
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
                store.dispatch({type : "CLEARRELOAD", data: value})
                break;
            case 'edittodo':
                editTodo(process.env.REACT_APP_API_EDITTODO, value, id)
                store.dispatch({type : "CLEAREDIT", data: {id: id, ...value}})
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
                <Grid container className="abs">
                    <Grid item xs={12}>
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