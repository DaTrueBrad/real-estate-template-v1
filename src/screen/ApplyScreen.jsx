import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import RentForm from "../components/applyComponents/RentForm";
import useScroll from '../hooks/useScroll'

const ApplyScreen = () => {
  const [page, setPage] = useState("Rent");
  const handleChange = (e, value) => setPage(value);
  useScroll()
  // try and use formik with MUI? Validate using YUP?

  

  return (
    <div className="main-page">
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Apply Now
      </Typography>
      <TabContext value={page}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
            width: "100%",
            display: {
              xs: "none",
              sm: "block",
              md: "block",
            },
          }}
          centered
        >
          <Tab label="Rent" value="Rent" sx={{ fontSize: "20px" }}>
            Rent
          </Tab>
          <Tab
            label="BYU Fall - Men"
            value="BYU Fall - Men"
            sx={{ fontSize: "20px" }}
          />
          <Tab
            label="BYU Fall - Women"
            value="BYU Fall - Women"
            sx={{ fontSize: "20px" }}
          />
        </TabList>
        <TabPanel variant="section" value="Rent">
        <Typography variant="h3" align="center">
        Apply to Rent
      </Typography>
          <RentForm />
        </TabPanel>
        <TabPanel variant="section" value="BYU Fall - Men" align="center">
          <Typography variant="h3" align="center">Fall 2022 BYU Men Application</Typography>
          <RentForm />
        </TabPanel>
        <TabPanel variant="section" value="BYU Fall - Women" align="center">
          <Typography variant="h3" align="center">Fall 2022 BYU Women Application</Typography>
          <RentForm />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ApplyScreen;
