import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({children}){
    const [loading, setLoading] = useState(false);
    const [enableFlag, setEnableFlag] = useState({});

    async function fetchFeatureFlags(){
        try{
            //original service call
            setLoading(true);
            const response = await featureFlagDataServiceCall();
            setEnableFlag(response);
            setLoading(false);
        }catch(e){
            console.log(e);
            throw new Error(e);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchFeatureFlags();
    },[])
    return <FeatureFlagsContext.Provider value={{loading,enableFlag}}>{children}</FeatureFlagsContext.Provider>
}