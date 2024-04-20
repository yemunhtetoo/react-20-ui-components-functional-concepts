import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom(){
    const {data, error, pending}= useFetch("https://dummyjson.com/products?limit=200",{});
    
    const bottomRef= useRef(null);
    function handleScrollToTop(){
        window.scrollTo({
            top:0, left:0, behavior:'smooth',
        })
    }

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:'smooth'});
    }
    if(error){
        return <h1>Error occured! Please Try Again.</h1>
    }
    if(pending){
        return <h1>Loading ! Please wait...</h1>
    }
    return <div>
        <h1>Scroll To Top and Bottom Feature</h1>
        <h3>This is the top of the page</h3>
        <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
        <ul style={{listStyle: 'none'}}>
            {
                data && data.products && data.products.length ?
                    data.products.map(item=><li>{item.title}</li>)
                : null
            }
        </ul>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
        <div ref={bottomRef}></div>
        <h3>This is the bottom of the page</h3>
    </div>
}