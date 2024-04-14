import React from 'react'
import './MobileList.css'

export default function MobileList(props) {
    // const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyF-6ti5oMDg-sm_qSBEeIc1VEStSnqjbhiGRo8U_FQ&s";
    // const title = "Iphone 14 ProMax";
    // const price = '$100';
    const{image,title,price} = props;

  return (
    <div className='main'>
        {/* {console.log(props)}
        {props.greet} */}
      <img className='image' src={image} alt="mobile" />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
        
    </div>
  )
}
