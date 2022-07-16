import {
  Typography,
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Field, useFormik } from "formik";
import { Image } from "@mui/icons-material";
import { collection, addDoc, FieldValue, arrayUnion } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import db, { storage } from "../../FIREBASE_CONFIG";
import * as yup from "yup";

const NewPropertyForm = () => {
  const [open, setOpen] = useState(false);
  const [snackAlert, setSnackAlert] = useState({});
  const [images, setImages] = useState([]);
  const [rawFiles, setRawFiles] = useState({});
  const [imgUrls, setImgUrls] = useState([]);
  const handleOpen = () => setOpen(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const getLinks = async (values) => {
    const array = [];
    for await (const file of rawFiles) {
      const storageRef = ref(storage, `/houses/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => array.push(url));
      });
    }
    return Promise.allSettled(array);  
    // return array;
  };

  // useEffect(() => {

  // },[imgUrls])

  const validationSchema = yup.object().shape({
    type: yup
      .string("Type must be a word")
      .min(2, "Type must be longer than 2 characters")
      .max(10, "Property type cannot be longer than 10 characters")
      .required("Please declare a property type"),
    address1: yup
      .string("Address 1 must be a string of characters")
      .min(4, "Address 1 must be longer than 4 characters")
      .max(35, "Address 1 cannot be longer than 35 characters")
      .required("Please provide an Address"),
    address2: yup
      .string("Address 2 must be a string of characters")
      .max(8, "Address 2 has a max of 8 characters")
      .matches(/^[a-z0-9]+$/i, "Must only contain Alphanumeric characters"),
    city: yup
      .string("City must be a word")
      .min(2, "City must be longer than 2 characters")
      .max(35, "City cannot be longer than 35 characters")
      .required("Please provide a city"),
    state: yup
      .string("State must be a 2 character abbreviaton")
      .min(2, "State must be 2 characters long")
      .max(2, "State must be 2 characters long")
      .required("Please provide a state"),
    zip: yup
      .number("Zipcode must be a 5 character number")
      .test("length", "Must be exactly 5 characters", (val) => val.length === 5)
      .required("Please provide a zipcode"),
    bed: yup
      .number("Number of beds must be a number")
      .required("Please provide a number of beds"),
    bath: yup
      .number("Number of baths must be a number")
      .required("Please provide a number of baths"),
    sqFeet: yup
      .number("Square footage must be a number")
      .required("Please provide a square footage amount"),
    deposit: yup
      .number("Deposit amount must be a number")
      .required("Please provide a deposit amount"),
    price: yup
      .number("Price must be a number")
      .required("Please provide a price (monthly or otherwise)"),
    heating: yup,
    garage: yup,
    pets: yup,
    wifi: yup,
    laundry: yup,
  });

  const handleImages = async () => {
    const imageArray = [];
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      bed: "",
      bath: "",
      sqFeet: "",
      heating: false,
      garage: false,
      pets: false,
      wifi: false,
      laundry: false,
      deposit: false,
      price: false,
      imageList: [],
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      getLinks(values)
      .then(async (imageArray) => {
        await imageArray //=========================================================<<<<<<<<<<<<<<<<<<<<<<<<<<
        const newVals = {...values, imageList: [...imageArray]} 
        // const newVals = {...values, imageList: ["Hello, this is an array", "So cool"]} 
        return newVals;
      })
        .then(async (newValues) => {
          console.log(newValues);
          const docRef = await addDoc(collection(db, "properties"), newValues);
        })
        .finally(() => {
          setSnackAlert({
            type: "success",
            message: "You provided values!! Congrats!",
          });
          handleOpen();
        })
        .catch((err) => {
          console.log(err)
          setSnackAlert({
            type: "error",
            message: "There was an error handling your request",
          });
          handleOpen();
        });
    },
  });

  const uploadMultipleFiles = (e) => {
    const raw = [];
    const newImages = [];
    setRawFiles(e.target.files);
    raw.push(e.target.files);
    for (let i = 0; i < raw[0].length; i++) {
      newImages.push(URL.createObjectURL(raw[0][i]));
    }
    setImages(newImages);

    const myFiles = e.target.files;
  };

  return (
    <Box sx={{ width: "50vw" }}>
      <Typography variant="h4" align="center">
        New Property
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="type"
              placeholder="Type"
              value={formik.values.type}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="address1"
              placeholder="Address 1"
              value={formik.values.address1}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="address2"
              placeholder="Address 2"
              value={formik.values.address2}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="state"
              placeholder="State"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="zip"
              placeholder="Zipcode"
              value={formik.values.zip}
              onChange={formik.handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="bed"
              type="number"
              placeholder="Bed"
              value={formik.values.bed}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="bath"
              type="number"
              placeholder="Bath"
              value={formik.values.bath}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="sqFeet"
              type="number"
              placeholder="Square Feet"
              value={formik.values.sqFeet}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="deposit"
              type="number"
              placeholder="Deposit Amount"
              value={formik.values.deposit}
              onChange={formik.handleChange}
            />
            <TextField
              sx={{ width: 200 }}
              variant="filled"
              name="price"
              type="number"
              placeholder="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            <input
              accept="image/*"
              // className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={uploadMultipleFiles}
            />
          </Box>
        </Box>
        <Box>
          <FormControlLabel
            control={<Checkbox />}
            checked={formik.values.garage}
            label="Garage"
            name="garage"
            value={formik.values.garage}
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={formik.values.heating}
            label="Heating"
            name="heating"
            value={formik.values.heating}
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={formik.values.laundry}
            label="Laundry"
            name="laundry"
            value={formik.values.laundry}
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={formik.values.wifi}
            label="Wifi"
            name="wifi"
            value={formik.values.wifi}
            onChange={formik.handleChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            checked={formik.values.pets}
            label="Pet Friendly"
            name="pets"
            value={formik.values.pets}
            onChange={formik.handleChange}
          />
        </Box>
        <label htmlFor="raised-button-file">
          <Button
            variant="outlined"
            startIcon={<Image />}
            component="span"
            // className={classes.button}
          >
            Upload Images
          </Button>
        </label>
        <Typography variant="subtitle2">
          Please select the images in the order you wish for them to appear
        </Typography>
        <Box sx={{ height: 40 }}>
          {/* //TODO could we impliment a drag/drop to reorder the images? */}
          {images.map((pic, index) => {
            return <img src={pic} style={{ height: "100%" }} />;
          })}
        </Box>

        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        sx={{ minWidth: 300 }}
      >
        <Alert
          onClose={handleClose}
          severity={snackAlert.type}
          sx={{ width: "100%" }}
        >
          {snackAlert.message}
        </Alert>
      </Snackbar>
      {/* <img src="https://firebasestorage.googleapis.com/v0/b/real-estate-template-84b65.appspot.com/o/houses%2F20220609_115123.jpg?alt=media&token=755b49fc-b9a8-4dc6-a14a-56b866534b03" /> */}
    </Box>
  );
};

export default NewPropertyForm;
