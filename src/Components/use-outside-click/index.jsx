import { useRef, useState } from "react";
import useOutSideClick from "./test";

export default function UseOnclickOutSideTest(){
    const [showContent, setShowContent] = useState(false);

    const ref= useRef();
    useOutSideClick(ref,()=>setShowContent(false));
    return(
        <div ref={ref}>
            {showContent ? (
                <div>
                    <h1>This is a random content.</h1>
                    <p>
                        Please click outside of this to close this. It won't close if you click outside of this content.
                    </p>
                </div>
            ) : (
                <button onClick={()=>setShowContent(true)}>Show Content</button>
            )
        }
        </div>
    );
}