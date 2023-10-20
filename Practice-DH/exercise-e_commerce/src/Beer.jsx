import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


//Esta pagina renderizará cada bebida de manera individual
/**
 * @params {params} It is a hook that stores dynamic information of the URL, which was previously configured in another component, in this case from APP in Route in the path the configuration "beer/:id" is written. Then in Home, the redirect "/beer/${id}" is created with the navigate, information that will be captured by the useParams(), with "params.id", which will be passed to the fetch that will bring us the information of that specific beer .
 * @returns A card with the details of the clicked beer
 */

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