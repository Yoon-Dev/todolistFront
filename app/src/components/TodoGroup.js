import React, { Fragment, useState, useEffect } from 'react';
import Loading from './Loading';
import Empty from './Empty';
import Todo from './Todo';

const TodoGroup = props => {
    const [todo, setTodo] = useState(null);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        const createTodos = data => {
            const todos = data.map(item =>
                <Todo key={item.id} data={item}/>
            )
            return todos
        }
        if(props.data.length > 0){
            setTodo(createTodos(props.data))
        }
    }, [props.data]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    if(props.data.length > 0){
        return(  
            <Fragment>
                <h1>{props.title}</h1>
                { todo ? todo : <Loading big={false}/> }
            </Fragment>  
        )
    }else{
        return(
            <Fragment>
                <h1>{props.title}</h1>
                <Empty/>
            </Fragment>  
        )
    }

}

export default TodoGroup;