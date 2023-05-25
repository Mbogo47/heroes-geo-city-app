import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react';

function City() {
    const [city, setCity] = useState([])

    // let cityData;
    const fetchCity = async () => {
        try {
            // const response = await fetch('https://zenquotes.io/api/quotes');
            const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
                headers: {
                    'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                },
            });
            const data = await response.json();
            // cityData = data.data
            setCity(data.data)

            console.log(data.data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCity()
    }, [])


    return (
        <>
            <div>
                <button className='btn' onClick={() => { fetchCountry() }}>City</button>
                {city && city.map((city, index) => {
                    return (
                        <div className='cityElement' key={index}>
                            <p>City:{city.city}</p>
                            <p>Country:{city.country}</p>
                        </div>
                    )

                })}
            </div>



        </>
    )
}
export default City