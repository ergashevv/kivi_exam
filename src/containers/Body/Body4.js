import React from 'react'
import Card from '../../components/FirstPage/Card/Card';

import './Body.scss'
function Body4() {
    return (
        <div>
            
            <div className="body-card">

                <div className="bodyCard-wrapper">
                    <div className="card-products">
                        <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/8fxu9oj8pgh12-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 12:09"
                        price="678 000 000 сум"
                        />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/e8pp3pe50vva-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб  (Магазин 1 год гарантии)"
                        time="Вчера 20:00"
                        price="899 000 000 сум"
                    />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/xs451o5io4gh1-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 6:45"
                        price="39 000 сум"
                    />

                     <Card
                        img="https://apollo-olx.cdnvideo.ru/v1/files/z10dz5lvgzjf1-UZ/image;s=644x461"
                        title="iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)"
                        time="Вчера 4:00"
                        price="28 000 000 сум"
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

export default Body4;
