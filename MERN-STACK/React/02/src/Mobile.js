import React from "react";
import MobileList from "./MobileList";
import books from './books.json';

function Mobile() {


    return (
        <div>

            {books.map((ele)=>{
                return <MobileList
                image={ele.image}
                title={ele.title} 
                price={ele.price} 
                />
            })}
        </div>
    );
}
export default Mobile;
