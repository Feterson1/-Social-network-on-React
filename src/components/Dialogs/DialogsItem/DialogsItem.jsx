import React from 'react';
import { NavLink } from 'react-router-dom';
import dialog from './../Dialogs.module.css';



const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialog.dialog + dialog.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}




export default DialogsItem;
