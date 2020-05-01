import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { store } from '../storage/store';

const PrimaryButton = () => {
        return(
            <Fab color="primary" aria-label="add" className="float" onClick={() => store.dispatch({ type: 'ADDTODO'})}>
                <AddIcon />
            </Fab>
        )
}

export default PrimaryButton;