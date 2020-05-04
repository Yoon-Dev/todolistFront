import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useTodos } from '../services/Todo'
import Grid from '@material-ui/core/Grid';
import Loading from '../components/Loading';
import TodoGroup from '../components/TodoGroup';
import { store } from '../storage/store';
import { setNewValueEtat } from '../utils/date';

const Root = props => {
    let todos = useTodos()
    const todosRef = useRef(todos)
    const [loading, setLoading] = useState(true);
    const [todayTask, setTodayTask] = useState(null);
    const [tomorowTask, setTomorowTask] = useState(null);
    const [newvalue, setNewvalue] = useState(null);
    const [editvalue, setEditvalue] = useState(null);
    const [lastTodo, setlastTodo] = useState(null);
    store.subscribe(() => {
        if(store.getState().reload){
            setNewvalue(store.getState().reload)
        }else{
            setNewvalue(null)
        }
        if(store.getState().edit){
            setEditvalue(store.getState().edit)
        }else{
            setEditvalue(null)
        }
        if(store.getState().lastTodo){
            setlastTodo(store.getState().lastTodo)
        }else{
            setlastTodo(null)
        }
    })
    useEffect(() => {
        todosRef.current = todos
    }, [todos]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        if((todos || newvalue) && store.getState().lastAction.slice(0, 5) === "CLEAR" && store.getState().lastAction !== "CLEARDEL"){
            if(newvalue && todos[0]){
                newvalue['etat'] = setNewValueEtat(newvalue.date)
                todos[Object.keys(todos).length] = newvalue
            }else if(newvalue){
                todos[0] = newvalue
            }else if(editvalue){
                const edited = Object.values(todos).findIndex(el => el.id === editvalue.id);
                todos[edited] = editvalue
                todos[edited]['etat'] = setNewValueEtat(editvalue.date)
            }
            const tabdata = Object.values(todos)
            const today = tabdata.filter(todo => todo.etat !== 'bon');
            const avenir = tabdata.filter(todo => todo.etat === 'bon');
            setTodayTask(createTodoGroup(today, `À faire aujourd'hui`))
            setTomorowTask(createTodoGroup(avenir, 'À faire plus tard'))
            setLoading(false)
        }else if(lastTodo){
            const removed = Object.values(todos).findIndex(el => el.id === lastTodo);
            delete todos[removed]
        }   
    }, [todos, newvalue, editvalue, lastTodo]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const createTodoGroup = (data, title) => {
        const todoGroup =  <TodoGroup data={data} title={title}/>
        return todoGroup;  
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid container className={props.state ? "form-active mt-container" : "mt-container"} justify="center">
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