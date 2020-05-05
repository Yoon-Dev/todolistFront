import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const PrimaryButton = props => {
        return(
            <div className="float">
                <Fab color="primary" aria-label="add" onClick={() => props.click()} disabled={false}>
                        <AddIcon />
                </Fab>
            </div>

        )
}
export default PrimaryButton;