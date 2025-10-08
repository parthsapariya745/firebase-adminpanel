import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [productURL, setProductURL] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDes, setProductDes] = useState("");
    const navigate = useNavigate();

    const handleAdd = async () => {
        if (productName && productURL && productPrice && productDes) {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    url: productURL,
                    name: productName,
                    price: productPrice,
                    des: productDes
                });
                console.log("Document written with ID: ", docRef.id);

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            alert("Please fill out input details");
        }

        setProductURL("");
        setProductName("");
        setProductPrice("");
        setProductDes("");
    };

    const handleGet = () => {
        navigate("/Product");
    };
    return (
        <div class="product-box">
            <div className="product-form">
                <h1>Product Details</h1>
                <input
                    type="text"
                    value={productURL}
                    onChange={(e) => setProductURL(e.target.value)}
                    placeholder="Enter Product URL"
                />
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter Product Name"
                />
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Enter Product Price"
                />
                <input
                    type="text"
                    value={productDes}
                    onChange={(e) => setProductDes(e.target.value)}
                    placeholder="Enter Product Description"
                />
                <button className="add" onClick={handleAdd}>Add Product</button>
                <button className="get" onClick={handleGet}>Get data</button>
            </div>
        </div>
    )
}
export default Home