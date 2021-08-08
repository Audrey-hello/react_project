import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Appelle()  {


    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />

     <div>Start date={startDate ? moment(startDate).format("YYYY-MM-DD HH:mm:ss") : null} </div>
    </>
  );
};

export default Appelle;
