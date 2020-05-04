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
            <div className={props.state ? "form-active navbar" : "navbar"}>
                <Slide appear={false} direction="down" in={!trigger}>
                    <AppBar position="fixed" className={classes.bg}>
                        <Toolbar>  
                            <Grid container>
                                <Grid item xs={12} className={classes.scontain}>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon/>
                                        </div>
                                        <div className={classes.inputsearch}>
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
            </div>
            
        )
}

const useStyles = makeStyles((theme) => ({
    search: {
    //   position: 'relative',
      borderRadius: theme.shape.borderRadius,
      display: 'inline-flex',
      padding: '.6em',
      transition: 'all .3s ease',
      minWidth: "100%",
      [theme.breakpoints.up('md')]: {
        minWidth: "20%",
    },
    },
    searchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    scontain: {
        display: 'flex',
        justifyContent: "center",
        [theme.breakpoints.up('md')]: {
            justifyContent: "flex-end",
        },
    },
    inputsearch: {
        minWidth: "100%",
        '& *': {
            minWidth: "100%",
        }
    },
    bg: {
        boxShadow: 'none',
        backgroundColor: fade(theme.palette.primary.main, 0.55),
    }
}));

export default Navbar;