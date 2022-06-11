import {useState, useEffect, createContext} from 'react'
import './App.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AvailabilityScreen from './screen/AvailabilityScreen';
import ApplyScreen from './screen/ApplyScreen';
import DocScreen from './screen/DocScreen';
import SignInScreen from './screen/SignInScreen';
import Details from './components/resusable/Details';
import db from "./FIREBASE_CONFIG";
import Admin from './screen/Admin';

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const HomeContext = createContext()

function App() {
  const [allHomes, setAllHomes] = useState([])
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "properties"));
    const newArr = []

    querySnapshot.forEach((doc) => {
      const newObj = doc.data()
      newObj.id = doc.id
      newArr.push(newObj)
    });
    setAllHomes(newArr)
  };
  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="App">
      <Header />
      <HomeContext.Provider value={{allHomes}}>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/availability" element={<AvailabilityScreen />} />
        <Route path="/apply" element={<ApplyScreen />} />
        <Route path="/documents" element={<DocScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/*" element={<Admin />} />
      </Routes>
      </HomeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
export {HomeContext}