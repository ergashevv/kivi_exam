import React from 'react'
import Car4 from '../../Car4'
import TopBody from '../../TopBody'
import Header from '../../containers/Header/Header'
import FooterTop from '../../components/FirstPage/Footer/FooterTop'
import FooterBottom from '../../components/FirstPage/Footer/FooterBottom'
import InputRange from '../../components/FirstPage/IntupRange'
import Drops from '../../components/FirstPage/Drops'
function TopPage() {
    return (
        <div>
            <Header/>
           <InputRange/>
           <Drops/>
            <TopBody/>
            <Car4/>
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}

export default TopPage
