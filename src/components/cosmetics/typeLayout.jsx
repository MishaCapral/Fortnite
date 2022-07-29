import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, useMediaQuery, Grid } from "@mui/material";
import GoodsList from "./goods/goodsList";

// MUI sample
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const TypeLayout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // My logic
  const types = [
    "banner",
    "backpack",
    "petcarrier",
    "pet",
    "pickaxe",
    "outfit",
    "contrail",
    "glider",
    "emote",
    "emoji",
    "loadingscreen",
    "music",
    "spray",
    "toy",
    "wrap",
  ];
  const CapitalFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  const mediumViewport = useMediaQuery("(min-width:900px)");
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: {
          sm: "column",
          md: "row",
        },
      }}
    >
      <Grid item xs={12} md={1.7}>
        <Tabs
          orientation={mediumViewport ? "vertical" : "horizontal"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {types.map((type, index) => (
            // Label
            <Tab label={type} key={index} {...a11yProps({ index })} />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12} md={10.3}>
        {types.map((type, index) => (
          // Content
          <TabPanel value={value} index={index} key={index}>
            {CapitalFirstLetter(type)}
            <GoodsList type={type} />
          </TabPanel>
        ))}
      </Grid>
    </Grid>
    // </Box>
  );
};
export default TypeLayout;
