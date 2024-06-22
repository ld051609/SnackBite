import React, { useEffect, useState } from 'react';
import './Searchbar.css';
import { GoSearch } from "react-icons/go";
import {useNavigate} from 'react-router-dom'

const Searchbar = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:5000/snacks');
            const jsonData = await res.json();
            setData(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const searchParameters = Object.keys(Object.assign({}, ...data));

    const search = (data) => {
        return data.filter((item) => 
            searchParameters.some((key) => 
                item[key]?.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
    };
    
    const handleOnClick = (snackName) => {
        navigate(`/about/${snackName}`)

    }

    return (
        <div>
            <div className='input-box'>
                <input 
                    type="search" 
                    name='search' 
                    id='search' 
                    className='search-input' 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder='Search for snacks...' 
                />
                <button className='search-btn'>
                    <GoSearch className='search-icon' />
                </button>
            </div>
            {query && (
                <div className='search-results'>
                    {search(data).map((item, index) => (
                        <div key={index} className='search-item' onClick={() => handleOnClick(item.name)}>
                            {/* Render your search item details here */}
                            <p className='snackName'>{item.name}</p>
                            <img src={item.image} alt="" className='snack-img'/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Searchbar;
