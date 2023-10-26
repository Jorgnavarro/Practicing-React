import { useNavigate } from "react-router-dom"

const Home = ({hotels, selectedHotel}) => {
    const navigate = useNavigate();

    const handleClick = (id, hotel)=>{
        selectedHotel(hotel)
        navigate(`/details/${id}`);
    }
        return (
        <div className="mt-4 container_list">
            <ul className="list-group">
                {hotels.map(hotel=>{
                    return <li key={hotel.id} className="list-group-item" onClick={()=>handleClick(hotel.id, hotel)}>{hotel.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Home;