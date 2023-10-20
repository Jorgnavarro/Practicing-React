
/**
 * 
 * @param data The beer data that will be rendered in the "Home" parent.
 * @param onClick It receives as a parameter the id of the beer that is clicked on its body, on the card. The function has to be triggered in the child, so it is written ()=>onClick(data.id)
 * @returns A card with the beer information
 */
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