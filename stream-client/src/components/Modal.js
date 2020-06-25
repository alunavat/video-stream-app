//This is an example where we will use portal
// As explained it is used to create a component directly from body
// unlike all of React component which are in root div

import React from "react";
import ReactDOM from "react-dom";

// return value for portal different
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()} // this ensures user is redirected
        // only when clicked outside of modal
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content ">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
// we want this to be under body thus we give reference as second argument
// to create portal, we added div modal in index.html

export default Modal;

// Learn: if a child does not handle an event it goes to the parent to handle it
