import { useState } from "react"
import './style.css'
export default function Tabs({tabsContent}) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
    }
    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem,index)=><div className={index === currentTabIndex ? 'tab-item active' : 'tab-item'} onClick={()=>handleClick(index)} key={tabItem.label}>
                        <span className="label">{tabItem.label}</span>
                    </div>)
                }   
            </div>
            <div className="content" style={{color:'red'}}>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}