import { useEffect, useState } from "react"

export default function LoadMoreData(){
    const [loading, setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisableBtn] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result);
            if(result && result.products && result.products.length){
                setProducts([...products,...result.products]);
                setLoading(false);
            }
        }catch(e){
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(()=>{
        if(products && products.length === 100) setDisableBtn(true);
    },[products]);
    
    if(loading){
        return <div>Loading...</div>;
    }
    return <div className="container-two">
        <div className="product-container">
            {
                products && products.length ?
                products.map(item => <div key={item.id} className="product">
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>)
                : null
            }
        </div>
        <div className="button-container">
            <button disabled={disabledBtn} onClick={()=>setCount(count +1)}>Load More Products</button>
            {disabledBtn && <p>You have reached to 100 products</p>}
        </div>
        
    </div>
}