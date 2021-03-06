import React from "react";
import "react-datepicker/dist/react-datepicker.css";


function Popup(props)  {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
