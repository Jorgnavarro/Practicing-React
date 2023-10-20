import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Card from "./components/Card"

/**
 * 
 * @returns A list of  beers cards with data brought from the API
 */

const Home = () => {
    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        const res = await fetch("https://api.punkapi.com/v2/beers")
        const data = await res.json()
        console.log(data);
        setBeers(data)
    }

    useEffect(() => {
        getBeers()
    },[])

    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/beer/${id}`)
    }

    return (
        <>
        <div className='grid'>
            {beers.length
                ? beers.map(beer => (<Card key={beer.id} data={beer} onClick={handleClick} />))
                : null
            }
        </div>
        </>
    )
}

export default Home;
