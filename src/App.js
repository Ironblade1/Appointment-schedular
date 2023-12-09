// import logo from './logo.svg';
import './App.css';
import AppointmentList from './components/AppointmentList'
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import View from './components/View';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Home/>
              <Footer/>
            </>
        }></Route>
          <Route path="/AppointmentList" element={<AppointmentList/>}></Route>
          <Route path="/View" element={
            <>
            <View/>
            {/* <Footer/> */}
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
