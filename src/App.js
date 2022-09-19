import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import MeviEcosystem from './Components/Home/Part1/MeviEcosystem';
import MeviShop from './Components/Home/Part2/MeviShop';
import MeviEducation from './Components/Home/Part3/MeviEducation';
import MeviFarm from './Components/Home/Part4/MeviFarm';
import MeviFactory from './Components/Home/Part5/MeviFactory';
import MeviPlatForm from './Components/Home/Part6/MeviPlatForm';
import NavBtn from './Components/NavigationButton/NavBtn';


function App() {
  return (
    <div className="App">
      <Header />
      <MeviEcosystem/>
      <MeviShop/>
      <MeviEducation/>
      <MeviFarm/>
      <MeviFactory/>
      <MeviPlatForm/>
      <Footer/>
      <NavBtn/>

      {/* <Routes>
        <Route path='/' element={<Header/>} />
      </Routes> */}
     
      {/* <Routes>
        <Route path='/' element={<MeviEcosystem/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<MeviShop/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<MeviEducation/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<MeviFarm/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<MeviFactory/>} />
      </Routes>

      <Routes>
        <Route path="/" element={<MeviPlatForm/>} />
      </Routes>

      <Routes>
        <Route path='/' element={<Footer/>} />
      </Routes> */}

      {/* <Routes>
        <Route path='/' element={<NavBtn/>} />
      </Routes> */}

    </div>
  );
}

export default App;
