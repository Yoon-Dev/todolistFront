import React from 'react';
import { store } from '../storage/store';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const ClearForm = () => {
        return(
            <Grid item xs={12}>
                <Button onClick={() => store.dispatch({type: "CLEAR"})}>
                    <ClearIcon/>
                </Button>
            </Grid>
        )
}

export default ClearForm;