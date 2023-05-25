import './App.css';
import City from './components/City';
import Currency from './components/Currency';
import Places from './components/Places';
import Country from './components/Country';
import Title from './components/Title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Mainpage from './components/Mainpage';


function App() {

  return (
    <>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* <Mainpage /> */}
    </>
  );
}



export default App;

