// import React, { useState } from "react";
// import { Paper } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
// import ruLocale from "date-fns/locale/ru";
// import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";

// const theme = createTheme({
//   palette: {
//     primary: { light: green[300], main: green[500], dark: green[700] }
//   }
// });

// export default function Calender() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log("Date is: ", date);
//   };

//   return (
//     <MuiThemeProvider theme={theme}>
//       <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
//         <Paper style={{ overflow: "hidden" }}>
//           <Calendar date={selectedDate} onChange={handleDateChange} />
//         </Paper>
//       </MuiPickersUtilsProvider>
//     </MuiThemeProvider>
//   );
// }

import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
  return (
    <>
      <Calendar />
    </>
  )
}

 

