import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="outer">
        <div className="box" id="hometext">
            <div className="tagbox" id="tag1">
                <p className="capitalize">We provides best Yoga online</p>
            </div>
            <div className="tagbox" id="tag2">
                <p>Yoga is not just practice but way of life that connects mind , body and spirit.It teaches us to be present and to embrace the flow of life with grace and awareness.</p>
            </div>
            <div className="tagbox" id="tag3"> 
             <a  href= "#speciality" >
             <button className='btn' id="empty">View Courses</button>
            </a>
            </div>
            
        </div>
        <div className="box" id="imgbox">
            <div className="imbox" id="im1"> 
            </div>
            <div className="imbox" id="im2">    
            </div>
            <div className="imbox" id="im3">    
            </div>
       
        </div>
      </div>
    </div>
  )
}

export default Header
