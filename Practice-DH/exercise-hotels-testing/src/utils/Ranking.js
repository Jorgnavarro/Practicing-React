import Star from '@material-ui/icons/Star';
import StartOutline from '@material-ui/icons/StarOutline';

const Ranking = ({stars}) =>{
    console.log(stars);

    const ratingArr = [1, 1, 1, 1, 1].fill(0, stars)
    console.log(ratingArr);
    return(
        <>
        {ratingArr.map((calification, i) => calification? <Star key={i} style={{ color: "yellow"}}/>:<StartOutline key={i}/>)}
        </>
    )
}



export default Ranking;