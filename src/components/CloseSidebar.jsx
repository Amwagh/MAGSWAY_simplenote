import React from 'react';
import "./style.css";

const CloseSidebar = ({click,hide}) => {
    return (    
        <div className={hide? "close_sidebar sidebar_open" : "close_sidebar"} onClick={click}></div>
    );
}

export default CloseSidebar