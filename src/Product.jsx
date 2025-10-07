import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"))
        const data = querySnapshot.docs.map(doc => doc.data())
        setProductData(data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="showProduct">
      <button className="backhome" onClick={() => navigate("/")}>Back to Form</button>
      <h1>All Products</h1>
      <div className="product-container">
        {productData.map((e, i) => (
          <div key={i} className="product-card">
            <img width={180} src={e.url} alt={e.name} />
            <h3>{e.name}</h3>
            <p>Price: {e.price}</p>
            <p>{e.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;