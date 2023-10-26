import { useNavigate, useParams } from "react-router-dom";
import Ranking from "../utils/Ranking";
import Services from "../utils/Services";
import hotels from '../hotels.json';

const HotelDetail = () => {
    const params = useParams()
    const navigate = useNavigate();
    console.log(params.id);

    const hotelSelected = hotels.find(hotel => hotel.id === parseInt(params.id))

    function goBack() {
        navigate(-1)
    }

    return (
        <div className="container hotel_container">
            <div className=" container_card">
                <div className="card mt-5 card_hotel" style={{ "width": "18rem" }}>
                    <img src={hotelSelected.img} className="card-img-top" alt="imagen hotel" />
                    <div className="card-body">
                        <h5 className="card-title">{hotelSelected.name}</h5>
                        <p className="card-text">{hotelSelected.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Calification</h5>
                            <Ranking stars={hotelSelected.stars} />
                        </li>
                        <li className="list-group-item"><h6>City: <span>{hotelSelected.city}</span> </h6></li>
                        <li className="list-group-item"><h6>Daily price: <span>{hotelSelected.daily_price}</span> </h6></li>
                        <li className="list-group-item">
                            <h5>Services</h5> <Services wifi={hotelSelected.wifi} ac={hotelSelected["air-conditioned"]}
                                parking={hotelSelected.parking}
                                localRestaurant={hotelSelected.restaurant_service}
                                poolService={hotelSelected.pool_service}
                            />
                        </li>
                        <li className="list-group-item">
                            <h5>Contact</h5>
                            <div>
                                <h6>Phone: <span>{hotelSelected.phone}</span> </h6>
                                <h6>Email: <span>{hotelSelected.email}</span> </h6>
                            </div>
                        </li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="btn btn-primary" onClick={goBack}>Go back</a>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default HotelDetail;