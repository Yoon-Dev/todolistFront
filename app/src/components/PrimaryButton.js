import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles'

import { store } from '../storage/store';

const PrimaryButton = props => {
    const classes = useStyles();

    switch(true){
        case props.type === "del":
            return(
                    <Fab color="secondary" aria-label="add" onClick={() =>  store.dispatch({type: "CLEAR"})} disabled={false} className={classes.float}>
                        <ClearIcon/>
                    </Fab>
            )
        default:
            return(
                    <div className="float">
                        <Fab color="primary" aria-label="add" onClick={() => store.dispatch({type: "ADDTODO", data: null})} disabled={false}>
                            <AddIcon />
                        </Fab>
                    </div>
 
    
            )
    }

}

const useStyles = makeStyles((theme) => ({
    float: {
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "4"
    }
}));
export default PrimaryButton;