import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState, useContext } from "react";
import Banner from "../components/homeComponents/Banner";
import Dropdown from "../components/resusable/Dropdown";
import PropertyCard from "../components/resusable/PropertyCard";
import homes from "../assets/homes";
import useScroll from "../hooks/useScroll";
import db from "../FIREBASE_CONFIG";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { Bed, HomeTwoTone } from "@mui/icons-material";
import { HomeContext } from "../App";

const HomeScreen = () => {
  const {allHomes} = useContext(HomeContext)
  // const [allHomes, setAllHomes] = useState([])
  // const getData = async () => {
  //   // const info = await getDocs(collection(db, "properties"))
  //   // // console.log("Firebase Info: ", info)
  //   // info.forEach((doc) => {
  //   //   console.log(doc.id)
  //   // })
  //   const querySnapshot = await getDocs(collection(db, "properties"));
  //   console.log(querySnapshot)
  //   const newArr = []
  //   querySnapshot.forEach((doc) => {
  //     const newObj = doc.data()
  //     newObj.id = doc.id
  //     // console.log(newObj);
  //     newArr.push(newObj)
  //   });
  //   setAllHomes(newArr)
  // };
  // const fillData = async () => {
  //   homes.forEach((home) => {
  //     addDoc(collection(db, "properties"), {
  //       address1: home.address1,
  //       address2: home.address2,
  //       city: home.city,
  //       state: home.state,
  //       zip: home.zip,
  //       bed: home.bed,
  //       bath: home.bath,
  //       deposit: home.deposit,
  //       sqFeet: home.sqFeet,
  //       imageList: home.imageList,
  //       pets: home.pets,
  //       price: home.price,
  //       type: home.type,
  //       heating: home.heating,
  //       garage: home.garage,
  //       laundry: home.laundry,
  //       wifi: home.wifi
  //     })
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  //TODO To have this page function correctly, you'll need to alter the homelistings. When you grad data from the database, you will want to order by listing date, then filter for the first 8 properties.
  useScroll();

  const homeListings = allHomes.map((house, index) => {
    return <PropertyCard house={house} index={index} key={index} />;
  });
  return (
    <div className="main-page">
      <Banner />
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        Recent Properties
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2vw",
          flexWrap: "wrap",
          padding: "0px 10vw",
        }}
      >
        {homeListings}
      </Box>
      <Typography variant="h2" sx={{ marginTop: 10, marginBottom: 5 }}>
        FAQ
      </Typography>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default HomeScreen;
