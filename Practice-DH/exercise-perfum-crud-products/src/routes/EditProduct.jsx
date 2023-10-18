import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export function EditProduct() {
    const [product, setProduct] = useState({})
    const params = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();
    console.log(params.id);
    useEffect(() => {
        try {
            async function getProduct() {
                const dataProduct = await (await fetch(`http://127.0.0.1:5173/api/products/${params.id}`)).json();
                console.log(dataProduct);
                //esta es la notación que se debe usar porque la respuesta de mirage llega, separando product. por ende se guarda en el estado dataProduct.product
                if (dataProduct.product !== null) {
                    setProduct(dataProduct.product);
                }
            }
            if (params.id) {
                getProduct();
            }

        } catch (error) {
            console.log(error.message);
        }

    }, [params])

    /*Handlers */
    function handleTitle(e) {
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handlePrice(e) {
        setPrice(e.target.value);
    }

    function handleStock(e) {
        setStock(e.target.value);
    }

    function handleBrand(e) {
        setBrand(e.target.value);
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    function handleImage(e) {
        setImage(e.target.value);
    }

    const productUpdate = {
        title, description, price, stock, brand, category, image,
    }



    function handleOnSubmit(e) {
        e.preventDefault()
        console.log("Aquí");
        const differences = {}
        for(const key in productUpdate){
            if(productUpdate[key] !== undefined ){
                    differences[key] = productUpdate[key]
            }
        }
        if(Object.keys(differences).length=== 0){
            Swal.fire({
                title: "No changes were made!",
                icon: "warning",
            })
        }else{
            Swal.fire({
                title: `Are you sure you want to make these changes?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Update product!'
            }).then((result) => {
                if (result.isConfirmed) {
                    async function updateProduct (){
                        const productToChange = await ( await fetch(`http://127.0.0.1:5173/api/products/${params.id}`, {
                            method: "PUT",
                            body: JSON.stringify(differences),
                        })).json();
                        console.log(productToChange);
                    }
                    updateProduct()
                    console.log("differences to send: " , differences);
                    Swal.fire(
                        'Updated!',
                        'Your product has been updated.',
                        'success'
                    )
                    setTimeout(()=>{
                        navigate(-1);
                    }, 3000)
                    
                }
            }).catch(error=>{
                console.log(error);
            })

        }
    }

    function goBack(){
        navigate(-1);
    }
    


    console.log(product);

    return (
        <>
            <form onSubmit={handleOnSubmit} className="gap-2 d-flex flex-column">
                {/*input/label title */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputTitle" className=" col-form-label">Title</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputTitle" onChange={handleTitle} defaultValue={product.title} />
                    </div>
                </div>
                {/*input/label description */}
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="inputDescription" rows="3" onChange={handleDescription} defaultValue={product.description}></textarea>
                </div>
                {/*input/label price */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPrice" className=" col-form-label">Price:</label>
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" id="inputPrice" onChange={handlePrice} defaultValue={product.price} />
                    </div>
                </div>
                {/*input/label stock */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputStock" className=" col-form-label">Stock:</label>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" id="inputStock" onChange={handleStock} defaultValue={product.stock} />
                    </div>
                </div>
                {/*input/label brand */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputBrand" className=" col-form-label">Brand: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputBrand"
                            onChange={handleBrand} defaultValue={product.brand} />
                    </div>
                </div>
                {/*input/label category */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputCategory" className=" col-form-label">Category: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputCategory" onChange={handleCategory} defaultValue={product.category} />
                    </div>
                </div>
                {/*input/label image */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputImage" className=" col-form-label">Url Image: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputImage" onChange={handleImage} defaultValue={product.image} />
                    </div>
                </div>
                <button className="btn btn-primary " type="submit">Update product</button>
            </form>
            <button onClick={goBack}>Go back</button>
        </>

    )
}