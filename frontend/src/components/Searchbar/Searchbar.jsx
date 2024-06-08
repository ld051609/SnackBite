import React, { useEffect, useState } from 'react'
import './Searchbar.css'
import { GoSearch } from "react-icons/go";

const Searchbar = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('http://localhost:5000/api/snacks');
    const fetchData = async () => {
        try{
            const res = await fetch('');
            const jsonData = await res.json();
            setData(jsonData)
            console.log(jsonData);
        } catch(error){
            console.log(error);
        }

    }
    useEffect(() => {
        fetchData();
    }, []);

    // 
    const search_parameters = Object.keys(Object.assign({}, ...data))
    function search(data){
        return data.filter((data) => {
            search_parameters.some((key) => {
                data[key].toString().toLowerCase().includes(query.toLowerCase())
            })
        })
    }

  return (
    <div>
        <div className='input-box'>
            <input type="search" name='search' id='search' className='search-input' onChange={(e) => setQuery(e.target.value)} placeholder='Input search snack'/>
            <button className='search-btn' onClick={search}>
                <GoSearch className='search-icon'/>
            </button>
                    
        </div>

    </div>
  )
}

export default Searchbar