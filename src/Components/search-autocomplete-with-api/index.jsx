import { useEffect } from "react";
import { useState } from "react"
import Suggestions from "./suggestion";

export default function SearchAutocomplete(){ 
    const [status, setStatus] = useState('initial');
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const [filterUsers, setFilterUsers] = useState([]);
    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length >1){   
            const filterData =
            users && users.length ? users.filter((item)=> item.toLowerCase().indexOf(query) > -1)
            : [];
            setFilterUsers(filterData);
            setStatus('dropdown');
        }else{
            setStatus('initial')
        }
    }

    async function fetchListOfUser(){
        try{
            setStatus('loading');
            const response = await fetch(`https://dummyjson.com/users`);
            const data= await response.json();
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem=>userItem.firstName+' '+userItem.lastName));
                setStatus('initial')
            }
        }catch(error){
            console.log(error);
            setStatus('error');
            setStatus('initial');
        }
    }

    useEffect(()=>{
        fetchListOfUser()
    },[])

    if(status === 'nodata'){
        return <h2>Error</h2>
    }
    console.log(users,filterUsers);
    return <div className="search-autocomplete-container">
        {
            status === 'loading' ? (<h1>Loading Data ....</h1>) : (
            <input name="search-users" value={searchParam} onChange={handleChange}
        placeholder="Search Users here..." />
            )}
        {
            status === 'dropdown' && <Suggestions data={filterUsers} />
        }
    </div>
}