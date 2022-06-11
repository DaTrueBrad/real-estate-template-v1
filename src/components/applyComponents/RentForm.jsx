import { Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const RentForm = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ //this is a regex expression to identify if a phone number is valid or not
  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .min(2, "First name is a minimum of 2 characters")
      .max(50, "First name cannot be longer than 50 characters")
      .required("First Name is required"),
    middleInitial: yup
      .string("Put a middle initial")
      .max(1, "Initial must be one character in length"),
    lastName: yup
      .string("Enter your last name")
      .min(2, "Last name is a minimum of 2 characters")
      .max(50, "Last name cannot be longer than 50 characters")
      .required("Last Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string("Enter your phone number")
      .matches(phoneRegExp, "Enter a valid phone number")
      .required("Phone number is required")
    // TODO Finish out the validation for the rest of the fields.
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleInitial: "",
      lastName: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      unit: "",
      city: "",
      state: "",
      zip: undefined,
      income: undefined,
      credit: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    },
  });
  return (
    <Box sx={{width: "50vw",}}>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginTop: 4, marginBottom: 2,  display: "flex", flexDirection: 'column', alignItems: 'center' }}
      >
        Personal Information
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            marginBottom: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              variant="outlined"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              variant="outlined"
              placeholder="Middle Initial"
              id="middleInitial"
              name="middleInitial"
              value={formik.values.middleInitial}
              onChange={formik.handleChange}
              error={
                formik.touched.middleInitial &&
                Boolean(formik.errors.middleInitial)
              }
              helperText={
                formik.touched.middleInitial && formik.errors.middleInitial
              }
            />
            <TextField
              variant="outlined"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />

            <TextField
              variant="outlined"
              // type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="outlined"
              type="tel"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Address Line 1"
              id="address1"
              name="address1"
              value={formik.values.address1}
              onChange={formik.handleChange}
              error={formik.touched.address1 && Boolean(formik.errors.address1)}
              helperText={formik.touched.address1 && formik.errors.address1}
            />
            <TextField
              variant="outlined"
              placeholder="Address Line 2"
              id="address2"
              name="address2"
              value={formik.values.address2}
              onChange={formik.handleChange}
              error={formik.touched.address2 && Boolean(formik.errors.address2)}
              helperText={formik.touched.address2 && formik.errors.address2}
            />
            <TextField
              variant="outlined"
              placeholder="Appt or Unit #"
              id="unit"
              name="unit"
              value={formik.values.unit}
              onChange={formik.handleChange}
              error={formik.touched.unit && Boolean(formik.errors.unit)}
              helperText={formik.touched.unit && formik.errors.unit}
            />
            <TextField
              variant="outlined"
              placeholder="City"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            <TextField
              variant="outlined"
              placeholder="State"
              id="state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
            <TextField
              variant="outlined"
              placeholder="Zip Code"
              id="zip"
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={formik.touched.zip && formik.errors.zip}
            />
          </Box>
        </Box>
        <TextField
          variant="outlined"
          type="number"
          placeholder="What is your estimated Monthly Income?"
          id="income"
          name="income"
          value={formik.values.income}
          onChange={formik.handleChange}
          error={formik.touched.income && Boolean(formik.errors.income)}
          helperText={formik.touched.income && formik.errors.income}
          sx={{width: {
            sm: "100%",
            md: "90%",
            lg: "50%"
          }}}
        />
        <TextField
          variant="outlined"
          type="number"
          placeholder="What is your estimated Credit Score?"
          id="credit"
          name="credit"
          value={formik.values.credit}
          onChange={formik.handleChange}
          error={formik.touched.credit && Boolean(formik.errors.credit)}
          helperText={formik.touched.credit && formik.errors.credit}
          sx={{width: {
            sm: "100%",
            md: "90%",
            lg: "50%"
          }}}
        />
        <Button type="submit" variant="contained" sx={{width: 300}}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default RentForm;
