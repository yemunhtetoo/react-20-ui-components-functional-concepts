import { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selection, setSelection] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
        setSelection(getCurrentId === selection ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        /* console.log(findIndexOfCurrentId); get -1 */
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    console.log(selection, multiple)
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selections</button>
            <div className="accordion">
                {data && data.length > 0 ? (
                        (data.map(dataItem => (
                        <div className="item" key={dataItem.id}>
                            <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection ?
                                multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="accordian-content">{dataItem.answer}</div>
                                 ) 
                                 : selection === dataItem.id && (
                                 <div className="accordian-content">{dataItem.answer}</div>
                                 )}
                            {/* {
                                selection === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (<div className="content">{dataItem.answer}</div>) : null
                            }  */}
                        </div>))))
                        : <div>No data Found!</div>
                }
            </div>
        </div>
    );
}