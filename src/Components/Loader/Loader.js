import React from 'react';
import './loader.css';
import bracketLeft from './../../images/png/bracketLeftBlack.png';
import bracketRight from './../../images/png/bracketRightBlack.png';


const Loader = () => 
    (
    <div className="container">
            <div className="circle">
                
                    <img className="bracketleftloader" src={bracketLeft} alt=""/>
                    <img className="bracketrightloader" src={bracketRight} alt=""/>
              
            </div>
    </div>
    )


export default Loader