import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AvailabilityScreen from './screen/AvailabilityScreen';
import ApplyScreen from './screen/ApplyScreen';
import DocScreen from './screen/DocScreen';
import SignInScreen from './screen/SignInScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/availability" element={<AvailabilityScreen />} />
        <Route path="/apply" element={<ApplyScreen />} />
        <Route path="/documents" element={<DocScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
