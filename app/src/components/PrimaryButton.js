import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { store } from '../storage/store';

const PrimaryButton = props => {
        return(
            <div className={props.state ? "form-active float" : "float"} >
                <Fab color="primary" aria-label="add" onClick={() => store.dispatch({ type: 'ADDTODO', data: null})}>
                    <AddIcon />
                </Fab>
            </div>

        )
}

export default PrimaryButton;