import City from './City';
import Currency from './Currency';
import Places from './Places';
import Country from './Country'


function Mainpage() {
    return (
        <>

            <div className='main'>
                <City />
                <Currency />
                <Places />
                <Country />
            </div>
        </>

    )
}

export default Mainpage