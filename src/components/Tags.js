import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { lightBlue } from "@mui/material/colors";

export default function Tags({ characters }) {
  return (
    <div className="mr-4">
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{
            bgcolor: lightBlue[200],
            width: 28,
            height: 28,
            color: lightBlue[500],
            fontSize: 13,
          }}
        >
          {characters}
        </Avatar>
      </Stack>
    </div>
  );
}
