import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PoolIcon from '@material-ui/icons/Pool';

const Services = ({wifi, ac, parking, localRestaurant, poolService}) =>{
    console.log(ac)
    return(
        <div className='container_services'>
            {wifi?(<div className="container_icon">
            <WifiIcon/>
            <span>Wifi</span>
            </div>
            ):undefined}
            {ac?(<div className="container_icon">
                <AcUnitIcon/>
                <span>A/C</span>
                </div>):undefined}
            {parking?(<div className="container_icon">
                <LocalParkingIcon/>
                <span>Parking</span>
                </div>):undefined}
            {localRestaurant?(<div className="container_icon">
                <LocalDiningIcon/>
                <span>Restaurant</span>
                </div>):undefined}
            {poolService?(<div className="container_icon">
                <PoolIcon/>
                <span>Pool service</span>
                </div>):undefined}
        </div>
    )
}

export default Services;