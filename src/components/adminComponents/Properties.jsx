import Swal from 'sweetalert2'
import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db, {storage} from '../../FIREBASE_CONFIG';
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
import NewPropertyForm from './NewPropertyForm';
import EditPropertyForm from "./EditPropertyForm";

const Properties = ({data, getProperties}) => {
  // const [allHomes, setAllHomes] = useState([]);
  const [openNew, setOpenNew] = useState(false);
  const [selected, setSelected] = useState({})
  const [csv, setCsv] = useState(null);

  const selectProperty = (values) => {
    if(selected.address1 === values.address1) {
      setOpenNew(false)

      setSelected({})
    } else {
      setOpenNew(true)
      setSelected(values)
    }
  }

  useEffect(() => {
    selected.type ? setOpenNew(true) : setOpenNew(false)
  },[selected])

  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "properties"));
  //   const newArr = [];

  //   querySnapshot.forEach((doc) => {
  //     const newObj = doc.data();
  //     newObj.id = doc.id;
  //     newArr.push(newObj);
  //   });

  //   setAllHomes(newArr);
  //   let thing = await createCSV(newArr); //trying to create a CSV
  //   setCsv(thing);
  // };

  // useEffect(() => {
  //   createCSV(data)
  // },[])

  const createCSV = async (arr) => {
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

  const columns = [
    {
      field: "imageList",
      renderCell: (cellValues) => {
        return (
          <img src={cellValues.row.imageList[0]} style={{width: 80, aspectRatio: "16 / 9"}}/>
        );
      },
    },,
    { field: "type", headerName: "Type", width: 80 },
    { field: "bed", headerName: "Bed", width: 50 },
    { field: "bath", headerName: "Bath", width: 50 },
    { field: "address1", headerName: "Address 1", width: 200 },
    { field: "address2", headerName: "Address 2" },
    { field: "city", headerName: "City", width: 150 },
    { field: "state", headerName: "State", width: 55 },
    { field: "zip", headerName: "Zip", width: 70 },
    { field: "heating", headerName: "Heat", width: 60 },
    { field: "wifi", headerName: "WiFi", width: 60 },
    { field: "pets", headerName: "Pets", width: 60 },
    { field: "garage", headerName: "Garage", width: 70 },
    { field: "laundry", headerName: "Laundry", width: 70 },
    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => selectProperty(cellValues.row)} //! Set the onClick to a state containing the callvalues row. Display an edit form conditionally on the state being defined. on click, if state is defined and matches the cell values, set to blank, so the form disappears.
            startIcon={<Edit />}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "Delete",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <Button variant="outlined" color="error" startIcon={<Delete />} onClick={async () => {
            console.log(cellValues)
            Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: `You are about to delete ${cellValues.row.address1}. Are you sure?`,
              showCancelButton: true,
              confirmButtonText: "Delete",
              confirmButtonColor: "#DE1A1A"
            })
            .then(async (res) => {
              if(res.isConfirmed) {
                await deleteDoc(doc(db, "properties", cellValues.id))
                getProperties()
              }
            })
          }}>
            Delete
          </Button>
        );
      },
    },
  ];

  const form = data
    .filter((home, index) => home === selected)
    .map((property, index) => {
    return <EditPropertyForm property={property} />
  })

  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: 'center'
          // justifyContent: "space-between",
          // marginBottom: 5,
        }}
      >
      <Typography variant="h3" sx={{ marginTop: 5, marginBottom: 3 }}>
        Properties
      </Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
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
        </Box>
      
      <Box
        sx={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        {/* <Box sx={{ display: "flex", gap: 3 }}>
          <Button variant="contained" startIcon={<Home />}>
            Properties
          </Button>
          <Button variant="outlined" startIcon={<Person />}>
            Users
          </Button>
          <Button variant="outlined" startIcon={<Article />}>
            Leases
          </Button>
          <Button variant="outlined" startIcon={<FilePresentIcon />}>
            Documents
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
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
      </Box>
      <div
        style={{
          height: 400,
          width: "90%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </div>
      {/* <NewPropertyForm/> */}
      {openNew && <NewPropertyForm />}
      {/* {selected.type && <EditPropertyForm property={selected} />} */}
      {form}
    </Box>
  );
};

export default Properties;
