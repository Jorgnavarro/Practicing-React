const Home = ({hotels, selectedHotel}) => {

    const handleClick = (id)=>{
        selectedHotel(id)
    }
        return (
        <div className="mt-4 container_list">
            <ul className="list-group">
                {hotels.map(hotel=>{
                    return <li key={hotel.id} className="list-group-item" onClick={()=>handleClick(hotel.id)}>{hotel.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Home;