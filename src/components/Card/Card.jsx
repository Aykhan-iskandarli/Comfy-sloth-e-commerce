import React from 'react'
import {BiSearch} from "react-icons/bi"
import { Link } from "react-router-dom";

const Card = ({children,data,featured}) => {
  return (
    <div className='card_section'>
     {
       data &&  
        data.map(dat=>(
          <div key={dat.id} className="col-4 flex justify-center ">
          <div className="card">
             <div className="card-img">
                  <img src={dat.image} alt="" />
                  <Link to={`${dat.id}`} className="search">
                      <BiSearch/>
                  </Link>
             </div>
              <div className="card-desc">
                  <span className="card_name">{dat.name}</span>
                  <span className="card_price">${dat.price/100}</span>
              </div>
          </div>
      </div>
        ))
      
     }
      {
       featured &&  
        featured.slice(0,3).map(dat=>(
          <div key={dat.id} className="col-4 flex justify-center ">
          <div className="card">
             <div className="card-img">
                  <img src={dat.image} alt="" />
                  <Link to={`products/${dat.id}`} className="search">
                      <BiSearch/>
                  </Link>
             </div>
              <div className="card-desc">
                  <span className="card_name">{dat.name}</span>
                  <span className="card_price">${dat.price/100}</span>
              </div>
          </div>
      </div>
        ))
      
     }
    </div>
  )
}

export default Card