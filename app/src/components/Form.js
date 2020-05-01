import React, { useState } from 'react';
import { store } from '../storage/store';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import { postTodoData } from '../utils/data';

const Form = () => {
    const [isTodoActive, setisTodoActive] = useState(store.getState().addtodo);
    const [isLabelActive, setisLabelActive] = useState(store.getState().addlabel);
    store.subscribe(() => {
        setisTodoActive(store.getState().addtodo)
        setisLabelActive(store.getState().addlabel)
    })
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const addDb = (type, value) => {
        switch (type) {
            case 'todo':
                postTodoData(process.env.REACT_APP_API_ADDTODO, value)
                store.dispatch({type : "CLEARRELOAD", data: value})
                break;
            case 'label':
                console.log(value)
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
                        <TodoForm add={addDb}/>
                    </Grid>
                </Grid>            
            )
        case isLabelActive:
            return(
                <Grid container className="abs">
                    <Grid item xs={12}>
                        <div>FormLabel</div>
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