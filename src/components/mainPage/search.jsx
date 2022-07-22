import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchField = (props) => {
  const { onChange, value } = props;
  return (
    <Box>
      <TextField
        label="search"
        variant="standard"
        type="search"
        value={value}
        onChange={onChange}
        sx={{
          mt: "1.5rem",
        }}
      />
    </Box>
  );
};

export default SearchField;
