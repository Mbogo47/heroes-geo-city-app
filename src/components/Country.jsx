import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react';


function Country() {

    const [country, setCountry] = useState([])


    // let countryData;
    const fetchCountry = async () => {
        try {
            // const response = await fetch('https://zenquotes.io/api/quotes');
            const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries`, {
                headers: {
                    'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                },
            });
            const dataCountry = await response.json();
            // countryData = dataCountry.data
            setCountry(dataCountry.data)



            console.log(dataCountry.data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCountry()
    }, [])


    return (
        <>
            <div className='main-container'>
                <button className='btn' onClick={() => { fetchCountry() }}>Country</button>
                {country && country.map((country, index) => {
                    return (
                        <div className='cityElement' key={index}>
                            <p>Country:{country.name}</p>
                            <p>Currency:{country.currencyCodes}</p>
                        </div>
                    )

                })}
            </div>



        </>
    )
}


export default Country