import React, { useState, useEffect, useRef } from 'react';
import Loading from './Loading';
import Empty from './Empty';
import Todo from './Todo';
import { Grid } from '@material-ui/core';
import { delTodo } from '../utils/data';

const TodoGroup = props => {
    const [todo, setTodo] = useState(null);
    const self = useRef()
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        const createTodos = data => {
            const todos = data.map(item =>
                <Todo key={item.id} data={item} handleDel={handleDel}/>
            )
            return todos
        }
        if(props.data.length > 0){
            setTodo(createTodos(props.data))
        }else{
            setTodo(<Empty/>)
        }
    }, [props.data]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleDel = (el, id) => {
        delTodo(process.env.REACT_APP_DEL_TODO, id)
        el.classList.add('hidden')
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

        return(  
            <Grid container ref={self} justify="center">
                <Grid item xs={12}>
                    <h1>{props.title}</h1>
                </Grid>      
                { todo ? todo : <Loading big={false}/> }
            </Grid>  
        )
}

export default TodoGroup;