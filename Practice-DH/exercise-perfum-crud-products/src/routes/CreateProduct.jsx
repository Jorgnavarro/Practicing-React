import { useState} from "react";
import { useNavigate} from "react-router-dom"
import Swal from 'sweetalert2';


export function CreateProduct (){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

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

    const newProduct = {
        title, description, price, stock, brand, category, image,
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log("here!");
        const filterForm = Object.values(newProduct).filter(answer=>{
                return answer
        })
        if(filterForm.length === 7){
            async function createProduct (){
                const productNew = await ( await fetch(`http://127.0.0.1:5173/api/products`, {
                    method: "POST",
                    body: JSON.stringify(newProduct),
                })).json();
                console.log(productNew);
            }
            createProduct()
            Swal.fire({
                title: "The product has been created successfully.",
                icon:"success",
            })
            setTimeout(()=>{
                navigate(-1);
            }, 3000)

        }else{
            Swal.fire({
                title: "The product cannot be created, incomplete or erroneous data, please review.",
                icon: "error"
            })
        }
        
    }

    function goBack(){
        navigate(-1);
    }

    return (
        <>
            <form onSubmit={handleOnSubmit} className="gap-2 d-flex flex-column">
                {/*input/label title */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputTitle" className=" col-form-label">Title</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputTitle" onChange={handleTitle} defaultValue={title} />
                    </div>
                </div>
                {/*input/label description */}
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <textarea className="form-control" id="inputDescription" rows="3" onChange={handleDescription} defaultValue={description}></textarea>
                </div>
                {/*input/label price */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPrice" className=" col-form-label">Price:</label>
                    </div>
                    <div className="col-6">
                        <input type="number" className="form-control" id="inputPrice" onChange={handlePrice} defaultValue={price} />
                    </div>
                </div>
                {/*input/label stock */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputStock" className=" col-form-label">Stock:</label>
                    </div>
                    <div className="col-4">
                        <input type="number" className="form-control" id="inputStock" onChange={handleStock} defaultValue={stock} />
                    </div>
                </div>
                {/*input/label brand */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputBrand" className=" col-form-label">Brand: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputBrand"
                            onChange={handleBrand} defaultValue={brand} />
                    </div>
                </div>
                {/*input/label category */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputCategory" className=" col-form-label">Category: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputCategory" onChange={handleCategory} defaultValue={category} />
                    </div>
                </div>
                {/*input/label image */}
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputImage" className=" col-form-label">Url Image: </label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="inputImage" onChange={handleImage} defaultValue={image} />
                    </div>
                </div>
                <div className="mb-2">
                <button className="btn btn-primary " type="submit">Create product</button>
                </div>
            </form>
            <button onClick={goBack}>Go back</button>
        </>
    )
}