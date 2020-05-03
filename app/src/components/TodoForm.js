import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ClearForm from './ClearForm';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { toRealDate } from '../utils/date';

const TodoForm = props => {
    const [name, setName] = useState(props.edit ? props.edit.name : '');
    const [detail, setDetail] = useState(props.edit ? props.edit.detail ? props.edit.detail : '' : '');
    const [date, setDate] = useState(props.edit ? props.edit.date : toRealDate(new Date().toLocaleDateString()));

// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = () => {
        const newtask = {
            name: name,
            detail: detail,
            date: date
        }
        if(name && date && props.edit){
            props.add('edittodo', newtask, props.edit.id)
        }else if(name && date){
            props.add('todo', newtask)          
        }else{
            alert(`La tache n'a pas de nom`)
        }
      };
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
        return(
            <Card>
                <CardContent>
                    <Grid container>
                        <ClearForm/>
                        <Grid item xs={12}>
                            <TextField label="Name" value={name} onChange={e => setName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize aria-label="detail" placeholder="Detail" value={detail} onChange={e => setDetail(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Next appointment"
                                type="date"
                                defaultValue={date}
                                onChange={e => setDate(e.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleClick}>Ajouter</Button>
                        </Grid>

                    </Grid>
                </CardContent>
          </Card>
        )
}

export default TodoForm;