import React from 'react'
import Header from '../../containers/Header/Header'
import FooterTop from '../../components/FirstPage/Footer/FooterTop'
import FooterBottom from '../../components/FirstPage/Footer/FooterBottom'
import Tabs from '../../components/FirstPage/Tabs'
import Car from '../../Car'
import Car2 from '../../Car2'
import './HomePage.scss'
import SmallBody from '../../components/FirstPage/SmallBody'
function HomePage() {
    return (
        <div>
            <div className="header">
                <Header/>
                <Car2/>
                <Tabs/>
                <div className="carCar">
                    <Car/>
                </div>
                <div className="small-body-tab">
                    <SmallBody/>
                </div>
               <div>
                    <FooterTop/>
                    <FooterBottom/>
               </div>
               
            </div>
        </div>
    )
}

export default HomePage
