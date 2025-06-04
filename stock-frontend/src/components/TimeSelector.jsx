import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const TimeSelector = ({ value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Time Interval (minutes)</InputLabel>
      <Select value={value} label="Time Interval (minutes)" onChange={onChange}>
        <MenuItem value={5}>Last 5 minutes</MenuItem>
        <MenuItem value={15}>Last 15 minutes</MenuItem>
        <MenuItem value={30}>Last 30 minutes</MenuItem>
        <MenuItem value={60}>Last 60 minutes</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TimeSelector;
