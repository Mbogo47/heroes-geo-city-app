import './App.css';
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
    </>
  );
}



export default App;

