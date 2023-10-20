import { useState, useEffect } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"


//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams();
    const navigate = useNavigate();

    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        console.log(data);
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    },[])

    function goBack(){
        navigate(-1)
    }



    return (
        <div className="container_detail">
            <h2>Beer number {beer.id}</h2>
            <h3><strong>{beer.name}</strong></h3>
            <div className='card'>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default Beer;