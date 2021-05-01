import React from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap';
import  {useState} from 'react'

import Overlay from '../../../Overlay'
import Modal from 'react-modal'
import './HeaderBottom.scss'

function HeaderBottom() {
    const [modalIsOpen, setIsModalOpen] = useState(false)
    return (
        
        
        <div className="headerBottom">
            <div className="headerBottomWrapper container">
               <div className="firstHeaderBottomDropDown">
                    <DropdownButton id="dropdown-basic-button" title="Любая категория" className="dropDownWrapper">
                        <div className="drop">
                            
                        </div>
                    </DropdownButton>
                    <div className="down">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99962 6.9633L0.677019 0.126175C0.521446 -0.0420589 0.27217 -0.0420589 0.116597 0.126175C-0.0388657 0.29425 -0.0388657 0.563971 0.116597 0.732045L6.721 7.87391C6.87643 8.04203 7.12585 8.04203 7.28128 7.87391L13.8827 0.732045C13.959 0.649634 14 0.538549 14 0.430756C14 0.322923 13.9619 0.211839 13.8827 0.129269C13.7273 -0.038806 13.4778 -0.038806 13.3224 0.129269L6.99962 6.9633Z" fill="black"/>
                        </svg>
                    </div>
               </div>

               <div className="input">
                   <input type="text" className="input" placeholder="Что будем искать ?"/>
               </div>

               <div className="secondHeaderBottomDropDown">
                    <DropdownButton id="dropdown-basic-button" title="По всей Узбекистану" className="secondDropWrapper">
                 
                    </DropdownButton>
                    <div className="down">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99962 6.9633L0.677019 0.126175C0.521446 -0.0420589 0.27217 -0.0420589 0.116597 0.126175C-0.0388657 0.29425 -0.0388657 0.563971 0.116597 0.732045L6.721 7.87391C6.87643 8.04203 7.12585 8.04203 7.28128 7.87391L13.8827 0.732045C13.959 0.649634 14 0.538549 14 0.430756C14 0.322923 13.9619 0.211839 13.8827 0.129269C13.7273 -0.038806 13.4778 -0.038806 13.3224 0.129269L6.99962 6.9633Z" fill="black"/>
                        </svg>
                    </div>
               </div>


               <button className="search">
                   Найти
               </button>

            </div>


            <button onClick={ () =>  setIsModalOpen(true) }  className="add__button">


                    <div className="plus">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.128 4.772H12.86V7.628H8.128V12.36H5.272V7.628H0.54V4.772H5.272V0.0399985H8.128V4.772Z" fill="white"/>
                        </svg>
                    </div>

               <p className="add">
                   Добавить обьявления
               </p>
            </button>


            <Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setIsModalOpen(false)}
            style={
                {
                    overlay: {
                        width:'100vw',
                        height: '100vh',
                        color: 'lightblue',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        zIndex: '20009999'
                    }
                }
            }>
                <div className="addContent">
                    <div>
                        <button className="closeButton" onClick={() => setIsModalOpen(false)}>
                            close
                        </button>
                    </div>
                    <h2>Добавить обьявления бесплатно</h2>
                    <p>Для добавления вашего обьявлении вы должны выбрать категорию</p>
                </div>
                <Overlay/>


            </Modal>

        </div>


        

        

    )
}

export default HeaderBottom
