import React from 'react'
import Card from '../../components/FirstPage/Card/Card';

import './Body.scss'


function Body5() {
    return (
        <div>
            
            <div className="body-card">

                <div className="bodyCard-wrapper">
                    <div className="card-products">

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/2wc7xmk0kole3-UZ/image;s=644x461"
                        title="Кровать с закроватным модулем+ матрас Вита 160"
                        time="Вчера 22:55"
                        price="49 000 000 сум"
                    />
                        <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/ttm6yd6dgmz31-UZ/image;s=644x461"
                        title="2-к квартира, 55 м², 3/5 эт."
                        time="Вчера 9:30"
                        price="34 000 000 сум"
                        />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/5v0n56l1ofm7-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 01:55"
                        price="68 000 000 сум"
                    />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/nb8qm245hp2h1-UZ/image;s=644x461"
                        title="Светодиодная лампа с фронтальным стеклом 10шт"
                        time="Вчера 9:00"
                        price="90 000 000 сум"
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

export default Body5;
