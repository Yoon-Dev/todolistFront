import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useTodos } from '../services/Todo'
import Grid from '@material-ui/core/Grid';
import Loading from '../components/Loading';
import TodoGroup from '../components/TodoGroup';
import { store } from '../storage/store';

const Root = () => {
    let todos = useTodos()
    const todosRef = useRef(todos)
    const [loading, setLoading] = useState(true);
    const [todayTask, setTodayTask] = useState(null);
    const [tomorowTask, setTomorowTask] = useState(null);
    const [newvalue, setNewvalue] = useState(null);
    store.subscribe(() => {
        if(store.getState().reload){
            setNewvalue(store.getState().reload)
        }
    })
    useEffect(() => {
        todosRef.current = todos
    }, [todos]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {

        if(todos || newvalue){
            if(newvalue){
                newvalue['id'] = todos[Object.keys(todos).length-1].id+1;
                todos[Object.keys(todos).length] = newvalue
            }
            const tabdata = Object.values(todosRef.current)
            const today = tabdata.filter(todo => todo.etat !== 'bon');
            const avenir = tabdata.filter(todo => todo.etat === 'bon');
            setTodayTask(createTodoGroup(today, `A faire aujourd'hui`))
            setTomorowTask(createTodoGroup(avenir, 'A faire plus tard'))
            setLoading(false)
        }   
    }, [todos, newvalue]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°

    
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
const createTodoGroup = (data, title) => {
    const todoGroup =  <TodoGroup data={data} title={title}/>
    return todoGroup;  
}
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid container className="mt-container">
            { loading ? <Loading big={true}/> : 
            <Fragment>
                <Grid item xs={12}>
                    {todayTask}
                </Grid>
                <Grid item xs={12}>
                    {tomorowTask}
                </Grid>
            </Fragment>
            }
        </Grid>
    )
}

export default Root;