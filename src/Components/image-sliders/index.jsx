import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
export default function ImageSlider({ url, page = 1, limit = 5 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const respone = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await respone.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    //based on this url, we need to change
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);

    // console.log(images);
    if (loading) {
        return <div>Loading... </div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured! {errorMsg}</div>
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ?
                    images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'} />
                    ))
                    : null
            }

            <BsArrowRightCircleFill onClick={handleNext}
                className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) => <button key={index} onClick={()=>setCurrentSlide(index)} className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}></button>)
                        : null
                }
            </span>
        </div>
    );
}