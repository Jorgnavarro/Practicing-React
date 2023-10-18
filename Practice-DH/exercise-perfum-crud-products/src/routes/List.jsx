import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function List() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function getData() {
        const data = await (await fetch("api/products")).json();
        console.log(data);
        setProducts(data.products)
    }

    useEffect(() => {
        getData();
    }, [])

    function onClickDetail(id) {
        navigate(`${id}/detail`)
    }

    function removeProduct(id, name) {

        Swal.fire({
            title: `Are you sure to delete ${name} from your products?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                async function deleteProduct() {
                    await fetch(`http://127.0.0.1:5173/api/products/${id}`, {
                        method: "DELETE",
                    })
                }
                deleteProduct();
                const updateList = products.filter(product => {
                    return product.id !== id;
                })
                setProducts(updateList);
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
            }
        }).catch(error=>{
            console.log(error);
        })

    }

    function editProduct(id) {
        navigate(`${id}/editProduct`)

    }

    console.log(products);

    return (
        <div className='container_list d-grid'>
            <div>
                <h3>Products listado</h3>

            </div>
            <ul className='list-group'>
                {products?.map(product => {
                    return (
                        <li key={product.id} className="row d-flex align-items-center list-group-item list-group-item-secondary">
                            <div className='col-auto'>
                                <h4>{product.title}</h4>
                            </div>
                            <div className='col-auto d-flex justify-content-around gap-1'>
                                <button className='btn btn-outline-success' onClick={() => onClickDetail(product.id)}>Detail</button>
                                <button className='btn btn-outline-warning' onClick={() => editProduct(product.id)}>Edit</button>
                                <button className='btn btn-outline-danger' onClick={() => removeProduct(product.id, product.title)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Link to="/create">Create a new product</Link>
        </div>
    )


}