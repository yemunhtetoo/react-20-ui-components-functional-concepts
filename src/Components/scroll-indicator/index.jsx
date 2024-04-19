import { useEffect, useState } from "react"

export default function ScrollIndicator({url}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [scrollPercentage, setScrollPercentage]= useState(0);
    async function fetchData(getUrl){
        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            // console.log(data);
            if(data && data.products && data.products.length){
                setData(data.products);
                setLoading(false);
            }
        }catch(e){
            console.log(e);
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData(url);
    },[url]);

    function handleScrollPercentage(){
        //how much we scrolled, what is the full height, calculate percentage ...
        // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height) * 100);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage)
        return ()=>{
            window.removeEventListener('scroll',()=>{});
        }
    },[]);

    console.log(data, scrollPercentage);

    if(errorMsg){
        return <div>Error ! {errorMsg}</div>
    }
    if(loading){
        return <div>Loading data...</div>
    }
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progess-tracking-container">
                    <div className="current-progess-bar" style={{width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>)
                    : null
                }
            </div>
        </div>
    )
}