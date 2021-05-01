import React from 'react'
import Carousel from './components/FirstPage/Carousel/Carousel'
const Car = () => {
    return (
        <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto' }}>
            <Carousel
                show={4}
            >
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp1.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp2.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp3.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp1.png'alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp2.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp3.png'alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp1.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp2.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                 <div>
                    <div style={{padding: 8}}>
                        <img src='img/car-3.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                 <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp1.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                 <div>
                    <div style={{padding: 8}}>
                        <img src='img/komp3.png' alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Car
