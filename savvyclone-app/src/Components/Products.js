import React, {  useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
import Cards from './Cards'
import Modal from './Modal';
import '../Styles/Products.scss'
import '../Styles/Cards.scss'


const Products = () =>{
  const [Show, setShow] = useState(false);
  const [ModalData, setModalData] = useState([])
const showModal=(data) =>{
  console.log(data);
  setModalData(data)
  setShow(true)
}
if(Show){
  document.body.style.overflow='hidden';
}
if(!Show){
  document.body.style.overflow='unset';
}
const onClose=()=>{
  setShow(!Show)
}

  
  const [Res, setRes] = useState([]);      
  const[TempRes,setTempRes] =useState([]);
  const [ActiveFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(function (response) {
        setRes(response.data);
        //console.log(response.data.slice(0,2))
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
    } else if (val === 2) {
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
    } else if (val === 1) {
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
            
            <span className={`${ActiveFilter === 0 && 'active'}`}  onClick={(e) => filterContent(0)}>View All</span>
            <span className= {` ${ActiveFilter === 1 && 'active'}`} onClick={(e) => filterContent(1)}>Travel</span>
            <span className={` ${ActiveFilter === 2 && 'active'}`} onClick={(e) => filterContent(2)}>Electronics</span>
            <span className= {` ${ActiveFilter === 3 && 'active'}`} onClick={(e) => filterContent(3)}>Others</span>
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
              showModal={showModal}
            />
          
          
            </>
          );
        })}
        
      </div>
      <div>
      <Modal
        show={Show}
        onClose={onClose}
        pName={ModalData.pName}
        pPrice={ModalData.pPrice}
        pImg={ModalData.pImg}
      />
      </div>
    </div>
         
  )
}

export default Products;