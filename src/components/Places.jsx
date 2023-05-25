import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react';


function Places() {
    const [places, setPlaces] = useState([])
    const fetchPlaces = async () => {
        try {
            // const response = await fetch('https://zenquotes.io/api/quotes');
            const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/places', {
                headers: {
                    'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                },
            });
            const dataPlaces = await response.json();
            // countryData = dataCountry.data
            setPlaces(dataPlaces.data)

            console.log(dataPlaces.data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchPlaces()
    }, [])


    return (
        <>
            <div className='main-container'>
                <button className='btn' onClick={() => { fetchPlaces() }}>Places</button>
                {places && places.map((places, index) => {
                    return (
                        <div className='cityElement' key={index}>
                            <p>Name:{places.name}</p>
                            <p>Region:{places.region}</p>
                            <p>Code:{places.countryCode}</p>
                        </div>
                    )

                })}
            </div>




        </>
    )
}


export default Places