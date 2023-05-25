import './App.css';
import City from './components/City';
import Currency from './components/Currency';
import Places from './components/Places';
import Country from './components/Country';
import Title from './components/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <div className='main'>
          <City />
          <Currency />
          <Places />
          <Country />
        </div>
      </BrowserRouter>

    </>
  );
}



export default App;

