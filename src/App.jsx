import './App.css'
import City from './components/City';
import Currency from './components/Currency';
import Places from './components/Places';
import Country from './components/Country';


function App() {

  return (
    <>

      <div className='buttons'>
        <span>Geo city app</span>
      </div>
      <div className='main'>
        <City />
        <Currency />
        <Places />
        <Country />
      </div>



    </>
  )
}


export default App