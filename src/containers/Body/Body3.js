import React from 'react'
import Card from '../../components/FirstPage/Card/Card';

import './Body.scss'

// import { Link } from 'react-router-dom';

function Body() {
    return (
        <div>
            
            <div className="body-card">

                <div className="bodyCard-wrapper">
                    <div className="card-products">
                        <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/7jh03b516d2k-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 22:55"
                        price="39 000 000 сум"
                        />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/i5xvlutlf35e-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб  (Магазин 1 год гарантии)"
                        time="Вчера 22:55"
                        price="39 000 000 сум"
                    />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/glj1e55q1sjl1-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 22:55"
                        price="39 000 000 сум"
                    />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/a5s6kiriwind1-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 22:55"
                        price="39 000 000 сум"
                    />
                    </div>

                   
                   
                    
                    <span>

                    </span>
                   
                </div>

                <div className="more">
                        <a href="/">
                            Покозать еще (20)
                        </a>
                </div>
                
            </div>


           
            
        </div>
    )
}

export default Body;
