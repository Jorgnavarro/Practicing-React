import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export function List (){  
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function getData(){
        const data = await (await fetch("api/products")).json();
        console.log(data);
        setProducts(data.products)
    }

    useEffect(()=>{
        getData();
    },[])

    function onClickDetail (id){
        navigate(`${id}/detail`)
    }

    function chaoProduct(id){
        try {
            async function deleteProduct (){
                await fetch(`http://127.0.0.1:5173/api/products/${id}`,{
                    method: "DELETE",
                })
            }
            deleteProduct();
            const updateList = products.filter(product =>{
                    return product.id !== id;
            })
            setProducts(updateList);
        } catch (error) {
            console.log(error);
        }
        
    }

    function editProduct (id){
        navigate(`${id}/editProduct`)
        
    }

    console.log(products);

    return (
        <div className='container_list d-grid'>
            <div>
                <h3>Products listado</h3>
                <button onClick={getData}>GetData</button>
            </div>
            <ul className='list-group'>    
                {products?.map(product =>{
                        return(
                                <li key={product.id} className="row d-flex align-items-center list-group-item list-group-item-secondary">
                                    <div className='col-auto'>
                                        <h4>{product.title}</h4>
                                    </div>
                                    <div className='col-auto d-flex justify-content-around gap-1'>
                                        <button className='btn btn-outline-success' onClick={()=>onClickDetail(product.id)}>Detail</button>
                                        <button className='btn btn-outline-warning' onClick={()=>editProduct(product.id)}>Edit</button>
                                        <button className='btn btn-outline-danger' onClick={()=>chaoProduct(product.id)}>Delete</button>
                                    </div>
                                </li>
                        )
                })}
            </ul>
                    <Link to="/create">Create a new perfum</Link>
        </div>
    )


}