import React, { useEffect, useState, Fragment } from 'react';
import { useTodos } from '../services/Todo'
import Grid from '@material-ui/core/Grid';
import Loading from '../components/Loading';
import TodoGroup from '../components/TodoGroup';


const Root = () => {
    const todos = useTodos();
    const [loading, setLoading] = useState(true);
    const [todayTask, setTodayTask] = useState(null);
    const [tomorowTask, setTomorowTask] = useState(null);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        if(todos){
            const tabdata = Object.values(todos)
            const today = tabdata.filter(todo => todo.etat !== 'bon');
            const avenir = tabdata.filter(todo => todo.etat === 'bon')
            setTodayTask(createTodoGroup(today, `A faire aujourd'hui`))
            setTomorowTask(createTodoGroup(avenir, 'A faire plus tard'))
            setLoading(false)
        }   
    }, [todos]);
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