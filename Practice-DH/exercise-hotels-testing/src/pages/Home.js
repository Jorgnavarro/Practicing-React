import { useNavigate } from "react-router-dom"
import hotels from '../hotels.json';

const Home = () => {
    const navigate = useNavigate();

    function goBack (){
        navigate(-1);
    }

    const handleClick = (id) => {
        navigate(`/details/${id}`);
    }
    return (
        <div className="container hotel_container gap-3">
            <div className="mt-4 container_list">
                <h3>Available hotels</h3>
                <ul className="list-group">
                    {hotels.map(hotel => {
                        return <li key={hotel.id} className="list-group-item">
                            <div className="container_li">
                                <h6> {hotel.name}</h6>
                                <button className="btn btn-outline-info" onClick={() => handleClick(hotel.id)}>See more details</button>
                            </div>
                            </li>
                    })}
                </ul>
            </div>
            <div>
                <button onClick={goBack} className="btn btn-primary">Return to welcome page</button>
            </div>
        </div>
    )
}

export default Home;