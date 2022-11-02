import React, { Component, useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import Cards from './Cards'
import '../Styles/Products.scss'
import '../Styles/Cards.scss'


const Products = () =>{
  
  const [Res, setRes] = useState([]);      
  const[TempRes,setTempRes] =useState([]);
  const [ActiveFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(function (response) {
        setRes(response.data);
        setTempRes(response.data);
      })
      .catch(function () {
        console.log("Fetch failed");
      });
  }, []);
    
    
  const filterContent = (val) => {
    setActiveFilter(val);
    if (val === 0) {
      setTempRes(Res);
    } else if (val === 1) {
      let temp = Res.filter((e) => {
        if (e.category.name === "Electronics")
        return true;
        return false;

      });
      setTempRes(temp);
    } else if (val === 3) {
      let temp = Res.filter((e) => {
        if (e.category.name === "Others") return true;
        return false;
      });
      setTempRes(temp);
    } else if (val === 2) {
      let temp = Res.filter((e) => {
        if (e.category.name === "Shoes") return true;
        return false;
      });
      setTempRes(temp);
    }

  };
  return (
    <div className='products'>
      
        <div className='product-filters'>
            
            <span key={0} className={`${ActiveFilter === 0 && 'active'}`}  onClick={(e) => filterContent(0)}>View All</span>
            <span key={1} className= {` ${ActiveFilter === 1 && 'active'}`} onClick={(e) => filterContent(1)}>Travel</span>
            <span key={2} className={` ${ActiveFilter === 2 && 'active'}`} onClick={(e) => filterContent(2)}>Electronics</span>
            <span key={3} className= {` ${ActiveFilter === 3 && 'active'}`} onClick={(e) => filterContent(3)}>Others</span>
        </div>
          
        <div className='products-grid'>
          
        {TempRes.slice(0,15).map((item) => {
          return (
            <>
            
            <Cards  
            
              key={item.id}
              pName={item.title}
              pPrice={item.price}
              pImg={item.images[2]}
              
            />
          
          
            </>
          );
        })}
        
      </div>
    </div>
         
  )
}

export default Products;