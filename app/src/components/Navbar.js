import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import EndAdornment from './EndAdornment';
import { filterfct } from '../utils/filtre';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Navbar = props => {
    const { window } = props;
    const [values, setValues] = useState({
        input: ""
    });  
    const classes = useStyles();
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = () => {
        setValues({ input: "" });
        handleChange(null, 'input')
    };
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleChange = (event, prop) => {
        let inputname = '';
        if(event){
            inputname = event.target.value
            setValues({ ...values, [prop]: event.target.value });
        }

        filterfct(inputname, 'todo-item', 'data-name')        
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
        return(
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar position="fixed">
                <Toolbar>  
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <div>
                                    <InputBase
                                    placeholder="Search..."
                                    type="text"
                                    value={values.input}
                                    onChange={(e) => handleChange(e, 'input')}
                                    endAdornment={<EndAdornment click={() => handleClick()} value={values}/>}
                                    autoFocus={true}
                                    size="large"
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
                </AppBar>
            </Slide>
        )
}

const useStyles = makeStyles((theme) => ({
    search: {
    //   position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      display: 'inline-flex',
      padding: '.6em',
      transition: 'all .3s ease',
    },
    searchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export default Navbar;