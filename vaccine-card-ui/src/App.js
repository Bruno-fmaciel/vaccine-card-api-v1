import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddVacina from './components/AddVacina';
import NavBar from './components/NavBar';
import VaccineCardList from './components/VaccineCardList';
import UpdateVaccineCard from './components/UpdateVaccineCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route index element={<VaccineCardList />}/>
          <Route path="/" element={<VaccineCardList />}/>
          <Route path="/vaccineCardList" element={<VaccineCardList />}/>
          <Route path="/addVacina" element={<AddVacina />}/>
          <Route path="/editVaccineCard/:id" element={<UpdateVaccineCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
