import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { toRealDate } from '../utils/date';
import Fade from 'react-reveal/Fade';

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
        <Fade duration={300}>
            <Card className="form-card">
                <CardContent>
                    <Grid container className="form-contain">            
                        <Grid item xs={12}>
                            <TextField label="Nom" value={name} onChange={e => setName(e.target.value)} multiline className="form-item"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Detail"
                                multiline
                                value={detail}
                                onChange={e => setDetail(e.target.value)} 
                                className="form-item"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Dead line"
                                type="date"
                                defaultValue={date}
                                onChange={e => setDate(e.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                className="form-item"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleClick} variant="contained" color="primary">Enregistrer</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Fade>
        )
}

export default TodoForm;