import { useContext } from "react"
import Accordion from "../accordion"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"

export default function FeatureFlag(){
    const {loading,enableFlag} = useContext(FeatureFlagsContext);
    const  componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },
    ];
function checkEnabledFlags(getCurrentKey){
    return enableFlag[getCurrentKey];
}
    if(loading) return <h1>Loading data...</h1>
    return  <div>
        <h1 style={{textAlign:'center'}}>Feature Flags</h1>
        {
            componentsToRender.map(componentItem=>
                checkEnabledFlags(componentItem.key) ? <div style={{position:'relative',marginBottom:'100px'}} key={componentItem.key}>{componentItem.component}</div> : null)
        }
    </div>
}