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
  const { allHomes } = useContext(HomeContext);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const questionList = await getDocs(collection(db, "questions"));
    const newArr = [];
    questionList.forEach((doc) => {
      newArr.push(doc.data());
    });
    setQuestions(newArr);
  };

  //TODO To have this page function correctly, you'll need to alter the homelistings. When you grad data from the database, you will want to order by listing date, then filter for the first 8 properties.
  useScroll();

  useEffect(() => {
    getQuestions();
  }, []);

  const faq = questions.map((q, index) => {
    return <Dropdown question={q} key={index}/>;
  });

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
      {faq}
    </div>
  );
};

export default HomeScreen;
