import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { Button, Tab, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Properties from "../components/adminComponents/Properties";
import Spinner from "../components/resusable/Spinner";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db, { storage } from "../FIREBASE_CONFIG";
import {
  Add,
  Article,
  Delete,
  Edit,
  Home,
  Person,
  PlusOne,
  Upload,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import NewPropertyForm from "../components/adminComponents/NewPropertyForm";
import EditPropertyForm from "../components/adminComponents/EditPropertyForm";
import Users from "../components/adminComponents/Users";

const Admin = (props) => {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([])
  const [users, setUsers] = useState([])
  const [infoType, setInfoType] = useState("properties");
  const [openNew, setOpenNew] = useState(false);
  const [selected, setSelected] = useState({});
  const [csv, setCsv] = useState(null);
  const handleChange = (e, newValue) => setInfoType(newValue);
  console.log(data);
  // const selectProperty = (values) => {
  //   if (selected.address1 === values.address1) {
  //     setOpenNew(false);

  //     setSelected({});
  //   } else {
  //     setOpenNew(true);
  //     setSelected(values);
  //   }
  // };

  useEffect(() => {
    selected.type ? setOpenNew(true) : setOpenNew(false);
  }, [selected]);

  const getProperties = async () => {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const newArr = [];

    querySnapshot.forEach((doc) => {
      const newObj = doc.data();
      newObj.id = doc.id;
      newArr.push(newObj);
    });

    setProperties(newArr);
    let thing = await createCSV(newArr); //trying to create a CSV
    setCsv(thing);
  };

  const createCSV = async (arr) => {
    //TODO i need to create possible CSV formats for each collection. Currently we only have one for properties
    const csvString = [
      [
        "ID",
        "Type",
        "Address 1",
        "Address 2",
        "City",
        "State",
        "Zip",
        "Bed",
        "Bath",
        "Square Feet",
        "Deposit",
        "Price",
        "Heating",
        "Garage",
        "Pets",
        "Laundry",
        "Wifi",
      ],
      ...arr.map((item) => [
        item.id,
        item.type,
        item.address1,
        item.address2,
        item.city,
        item.state,
        item.zip,
        item.bed,
        item.bath,
        item.sqFeet,
        item.deposit,
        item.price,
        item.heating,
        item.garage,
        item.pets,
        item.laundry,
        item.wifi,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    let value = "data:text/csv;charset=utf-8," + encodeURI(csvString);
    return value;
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="main-page">
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Admin
      </Typography>
      <Typography variant="body1">
        This page is restricted to administrators of Global Homes. Once this
        template is converted over to your company, this will be locked behind
        an authentication wall.
      </Typography>
      <TabContext value={infoType}>
        <TabList onChange={handleChange}>
          <Tab label="Properties" value="properties" />
          <Tab label="Users" value="users" />
          <Tab label="Documents" value="documents" />
          {/* <Box sx={{ display: "flex", gap: 3, margin: "0px 30px" }}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => setOpenNew(!openNew)}
            >
              New
            </Button>
            <Button
              variant="outlined"
              startIcon={<Upload />}
              // onClick={exportData}
              href={csv}
              download="properties.csv"
            >
              Export
            </Button>
          </Box> */}
        </TabList>
        {/* <Spinner /> */}
        <TabPanel
          variant="section"
          value="properties"
          className="admin-section"
        >
          <Properties data={properties} getProperties={getProperties}/>
        </TabPanel>
        <TabPanel variant="section" value="users" className="admin-section">
          <Users />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Admin;
