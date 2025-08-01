import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify'

function Home() {
  const [loggedInUser, setloggedInUser] = useState(' ');
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    setloggedInUser(localStorage.getItem('loggedInUser'));
  }, [])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out successfully')
    setTimeout(() => {
        navigate('/login');
    }, 1000);

  }
  const fetchProducts = async () => {
    try {
        const url = "http://localhost:8000/products";
        const headers = {
            headers : {
                'Authorization': localStorage.getItem('token')
            }
        }
        const response = await fetch(url, headers);
        const result = await response.json();
        console.log(result);
        setProducts(result);
    } catch (error) {
        handleError(error);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])
    return (
    <div>
        <h1>{loggedInUser}</h1>
        <button onClick={handleLogout}>Logout</button>
        <div>
            {
                products.map((item, index) => (
                    <ul key={index}>
                        <span>{item.name} : {item.price}</span>
                    </ul>
                ))
            }
        </div>
        <ToastContainer />
    </div>
  )
}

export default Home
    