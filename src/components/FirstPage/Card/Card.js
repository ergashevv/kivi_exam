import React from 'react'
import { Link} from 'react-router-dom'
import './CardS.scss'
function Card({ img, title, price, time}) {
    return (
        <div>
            <div className="card">
                
                <Link >
                   <img src={img} alt=""/>
                   <h4 className="cardTitle">{title}</h4>
                    <span className="cardTime">{time}</span>
                    <h3 className="cardAmount">{price}</h3>
                </Link>
                    
                

            </div>
        </div>
    )
}

export default Card
