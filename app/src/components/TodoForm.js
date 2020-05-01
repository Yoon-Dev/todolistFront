import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ClearForm from './ClearForm';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from '@material-ui/core/Select';

const TodoForm = props => {
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [label, setLabel] = useState('');

// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = () => {
        const newtask = {
            name: name,
            detail: detail,
            date: date,
            label: label
        }
        if(name && date){
            props.add('todo', newtask)
        }else{
            alert(`La tache n'a pas de nom`)
        }
      };
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const toRealDate = lameDate => {
        const tabdate = lameDate.split('/')
        return `${tabdate[2]}-${tabdate[1]}-${tabdate[0]}`;
    }
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
                                defaultValue={toRealDate(date)}
                                onChange={e => setDate(e.target.value)}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={label}
                                onChange={e => setLabel(e.target.value)}
                                label="label"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
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