import React from 'react';
import ReactDOM from 'react-dom'
import '../Styles/Modal.scss'

export default function Modal(props) {
    
if(!props.show){
    return null;
}

return ReactDOM.createPortal(
    <div onClick={props.onClose} className='modal-root'>
        

        <div className='modal-header'>
             {/* <button  className='modal-close' onClick={props.onClose}>X</button>  */}
            <h2>{props.pName}</h2>
        </div>
        
            <div className='modal-image'>
                <img src={props.pImg}></img>
            </div>
        
        <div className='modal-footer'>
            <h3>Product price &#x20B9; {props.pPrice} / month</h3>
        </div>
            
    </div>
    , document.getElementById("root"));
}