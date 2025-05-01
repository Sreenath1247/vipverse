import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Home from "../pages/Home";
import PlayedGames from "../pages/PlayedGames";
import Upcoming from "../pages/Upcoming";
import Walkthroughs from "../pages/Walkthroughs";

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
        <Box sx={{ p: 1, pl: 3 }}>
          <div>{children}</div>
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

  return (
    <Box
      className="h-screen bg-slate-950 mt-5"
      sx={{ flexGrow: 1, display: "flex" }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className="w-50"
        sx={{
          "& .MuiTabs-indicator": {
            display: "none", // Disable underline
          },
        }}
      >
        <Tab
          label="Home"
          disableRipple
          sx={{
            color: "#6B7280",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: "#6B7280",
            },
            "&:hover": {
              color: "#fff",
              outline: "none",
              transition: "color 0.3s ease-in-out",
            },
            "&:focus-within": {
              color: "#fff",
              outline: "none",
            },
          }}
          {...a11yProps(0)}
        />
        <Tab
          label="Played games"
          disableRipple
          sx={{
            color: "#6B7280",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: "#fff",
            },
            "&:hover": {
              color: "#fff",
              outline: "none",
              transition: "color 0.3s ease-in-out",
            },
            "&:focus-within": {
              color: "#fff",
              outline: "none",
            },
          }}
          {...a11yProps(1)}
        />
        <Tab
          label="Upcoming"
          disableRipple
          sx={{
            color: "#6B7280",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: "#fff",
            },
            "&:hover": {
              color: "#fff",
              outline: "none",
              transition: "color 0.3s ease-in-out",
            },
            "&:focus-within": {
              color: "#fff",
              outline: "none",
            },
          }}
          {...a11yProps(2)}
        />
        <Tab
          label="Walkthroughs"
          disableRipple
          sx={{
            color: "#6B7280",
            fontWeight: "bold",
            "&.Mui-selected": {
              color: "#fff",
            },
            "&:hover": {
              color: "#fff",
              outline: "none",
              transition: "color 0.3s ease-in-out",
            },
            "&:focus-within": {
              color: "#fff",
              outline: "none",
            },
          }}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel className="text-white w-full" value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel className="text-white w-full" value={value} index={1}>
        <PlayedGames />
      </TabPanel>
      <TabPanel className="text-white w-full" value={value} index={2}>
        <Upcoming />
      </TabPanel>
      <TabPanel className="text-white w-full" value={value} index={3}>
        <Walkthroughs />
      </TabPanel>
    </Box>
  );
}
