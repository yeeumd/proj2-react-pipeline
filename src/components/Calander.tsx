import React, { useState } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField, Button } from '@mui/material';

const MyCalendarSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Handle the selected date
    console.log(selectedDate);
  };

  return (
    <div>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default MyCalendarSelector;
