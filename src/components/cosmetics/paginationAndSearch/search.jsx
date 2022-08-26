import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SearchField = ({ onChange, value }) => {
  return (
    <Box>
      <TextField
        label="search"
        size="small"
        variant="outlined"
        type="search"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default SearchField;
