import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react';

function Currency() {
    const [currency, setCurrency] = useState([])

    const fetchCurrencies = async () => {
        try {
            // const response = await fetch('https://zenquotes.io/api/quotes');
            const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/locale/currencies', {
                headers: {
                    'X-RapidAPI-Key': '4e949eea90msh80e586746cb2efbp171819jsn3e2c109391fd',
                    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
                },
            });
            const dataCurrency = await response.json();
            // countryData = dataCountry.data
            setCurrency(dataCurrency.data)

            console.log(dataCurrency.data)

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        fetchCurrencies()
    }, [])


    return (
        <>


            <div className='main-container'>
                <button className='btn' onClick={() => { fetchCurrencies() }}>Currency</button>
                {currency && currency.map((currency, index) => {
                    return (
                        <div className='cityElement' key={index}>
                            <p>Symbol:{currency.symbol}</p>
                            <p>Code:{currency.countryCodes}</p>
                        </div>
                    )

                })}

            </div>



        </>
    )
}


export default Currency