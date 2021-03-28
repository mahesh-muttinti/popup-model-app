import React from 'react';
import ReactDOM from 'react-dom';

export default function Model({children, open, onClose}) {
    if(!open) return null
    const MODEL_STYLE ={
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "40px",
        transition: ".4s ease"
    }
    
    const OVERLAY_STYLE = {
        position: "fixed",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "rgba(0,0,0,.7)",
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto"
    }
    // ReactDOM.createPortal() is a method that gives the parent child relationship with the event Delegation
    // event Delegation in the sense is the click events on parent & its childrens can be related to add the custom actions on children elements, it make sense
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODEL_STYLE}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    );
}
