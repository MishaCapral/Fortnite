import React from "react";
import { Box, TextField } from "@mui/material";

const SearchField = (props) => {
  const { onChange, value } = props;
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
