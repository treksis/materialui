import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li className="note">
      <Typography variant="h5" component="h6">
        {note.content}
      </Typography>
      <Button variant="contained" onClick={toggleImportance}>
        {label}
      </Button>
    </li>
  );
};

export default Note;
