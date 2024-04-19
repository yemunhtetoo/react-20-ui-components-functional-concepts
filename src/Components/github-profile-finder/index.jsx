import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import './styles.css';

export default function GitHubProfileFinder(){

    const [userName, setUserName] = useState('yemunhtetoo');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData(){
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${userName}`);
            
                const data = await res.json();
                if(data) {
                    setUserData(data);
                    setLoading(false);
                    setUserName('');  
            }
            
            
    }

    useEffect(()=>{
        fetchGithubUserData();
    },[]);

    if(loading){
        return <div>Loading data...</div>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="search-by-username" 
                type="text" 
                placeholder="Search Github User Name..." 
                value={userName} 
                onChange={e=>setUserName(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
}