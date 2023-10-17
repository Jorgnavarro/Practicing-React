import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export function Detail() {
    const params = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    console.log(params.id);
    useEffect(() => {
        try {
            async function getProduct() {
                const dataProduct = await ( await fetch(`http://127.0.0.1:5173/api/products/${params.id}`)).json();
                console.log(dataProduct);
                //esta es la notación que se debe usar porque la respuesta de mirage llega, separando product. por ende se guarda en el estado dataProduct.product
                if(dataProduct.product !== null){
                    setProduct(dataProduct.product);
                }
            }
            if(params.id){
                getProduct();
            }
            
        } catch (error) {
            console.log(error.message);
        }
        
    }, [params])

    function goBack(){
        //-1 indica que nos retrocedemos un elemento, regresamos a "/"
        navigate(-1);
    }
    return (
        <div className="card" style={{width: "18rem"}}>
            {product?(
                <>
                <img src={product.image} className="card-img-top" alt="img product"/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: {product.price} EUR</li>
                    <li className="list-group-item">Stock: {product.stock}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-outline-info" onClick={goBack}>Go back</button>
                </div>
                </>
            ):<h3>Product not found</h3>}
        </div>
    )
}