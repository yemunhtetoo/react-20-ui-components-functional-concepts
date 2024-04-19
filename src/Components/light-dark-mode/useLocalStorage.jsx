import { useEffect, useState } from "react";

// lighttheme: true/false
export default function useLocalStorage(key,defaultValue){
    const [value, setValue] = useState(()=>{
        //take current value
        let currentValue;
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        }catch(e){
            console.log(e);
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    },[key,value]);
    return [value, setValue];
}