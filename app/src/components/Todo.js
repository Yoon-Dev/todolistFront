import React, { useState, useRef, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { delTodo } from '../utils/data';
import { store } from '../storage/store';
import { setNewValueEtat } from '../utils/date';


const Todo = props => {
    const [read, setRead] = useState(false);
    const [name, setName] = useState(props.data.name);
    const [detail, setDetail] = useState(props.data.detail ? props.data.detail : '');
    const [etat, setEtat] = useState(props.data.etat);
    const [date, setDate] = useState(props.data.date);
    const self = useRef()
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    store.subscribe(() => {
        if(store.getState().lastAction === "CLEAREDIT" && store.getState().edit.id === props.data.id){
            setName(store.getState().edit.name)
            setDetail(store.getState().edit.detail)
            if(date !== store.getState().edit.date){
                setDate(store.getState().edit.date)
                setEtat(setNewValueEtat(store.getState().edit.date))
            }
        }
    })
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = type => {
        switch (type) {
            case 'del':
                delTodo(process.env.REACT_APP_DEL_TODO, props.data.id)
                self.current.classList.add('hidden')
                break;
        
            default:
                break;
        }
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
        return(
            <Card className="todo-item" ref={self} data-name={name}>
                <CardContent>
                    <Grid container justify="center">
                        <Grid item xs={6} className="todo-edit">
                            <Button onClick={() => store.dispatch({type: 'ADDTODO', data: props.data})}>
                                <EditIcon/>
                            </Button>       
                        </Grid>
                        <Grid item xs={6} className="todo-done">
                            <Button onClick={() => handleClick('del')}>
                                <DoneAllIcon/>
                            </Button>       
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                        </Grid>
                        { etat === "bon" ?
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">
                                {date}
                            </Typography>
                        </Grid>
                        : null }
                        { detail ? 
                                <Fragment>
                                    <Grid item xs={12} onClick={() => {setRead(!read)}}>
                                        <Typography variant="overline" color="textSecondary" component="p">
                                            {read ? 'Cacher' : 'Detail...'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={read ? 'show' : 'hidden'}>
                                        <Typography variant="body1" color="textPrimary" component="p">
                                           {detail}
                                        </Typography>
                                    </Grid>
                                </Fragment>                             
                        : null}
                    </Grid>
                </CardContent>  
            </Card>

        )
}

export default Todo;