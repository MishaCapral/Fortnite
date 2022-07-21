import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GoodsListAPIComponent from "./goodsListContainer";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const types = useSelector((state) => state.mainPage.typeCategory);
  // const types = [
  //   "outfit",
  //   "banner",
  //   "backpack",
  //   "emote",
  //   "emoji",
  //   "glider",
  //   "loadingscreen",
  //   "music",
  //   "pet",
  //   "pickaxe",
  //   "spray",
  //   "toy",
  //   "glider",
  //   "wrap",
  // ];
  const CapitalFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        //height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {types.map((type, index) => (
          //label
          <Tab label={type} key={index} {...a11yProps({ index })} />
        ))}
      </Tabs>

      {types.map((type, index) => (
        //content
        <TabPanel value={value} index={index} key={index}>
          {CapitalFirstLetter(type)}
          <GoodsListAPIComponent type={type} />
        </TabPanel>
      ))}
    </Box>
  );
}
