import { Outlet, useNavigate, useParams } from "react-router-dom";

const Card = ({ data, onClick }) => {

    return (
        <div className='card' onClick={()=>onClick(data.id)}>
            <h3>{data.name}</h3>
            <p>{data.tagline}</p>
            <img src={data.image_url} alt="beer-detail" />
        </div>
    )
}

export default Card;