import React from 'react'
import HeaderTop from '../../components/FirstPage/Header/HeaderTop'
import HeaderBottom from '../../components/FirstPage/Header/HeaderBottom'
import './Header.scss';

function Header() {
    return (
        <div>
          <div className="headerContainerWrapper">
               <div className="header-container container">
                <HeaderTop/>
                <HeaderBottom/>
                </div>
          </div>

        </div>
    )
}

export default Header
