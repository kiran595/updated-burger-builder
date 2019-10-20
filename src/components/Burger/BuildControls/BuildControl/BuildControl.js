import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.Less} onClick={props.removed} disabled={props.disabled}>less</div>
            <div className={classes.More} onClick={props.added}>more</div>
        </div>
    );
};

export default buildControl;