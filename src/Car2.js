    import React, {useState} from 'react'
import CarTwo from './components/FirstPage/CarTwo/CarTwo'
import { Link } from 'react-router-dom'


import Modal from 'react-modal'
import  './Car2.scss'
const Car2 = () => {
    const [modalIsOpen, setIsModalOpen] = useState(false)
    return (
        <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto'}}>
            <CarTwo
                show={8}
            >
                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       >
                           <img className="img1" src='img/plane.svg' alt="placeholder" style={{width: '52px', height: '52px', margin: '10px'}} />
                        <p>Автомобили</p>
                       </button>
                    </div>
                </div>
                

               

                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                          <img className="img2" src='img/home.svg' alt="placeholder" style={{width: '47px', height: '47px', margin: '10px'}} />
                        <p> Недвижимость</p>
                       </button>
                    </div>
                </div>
                

                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                         <img    className="img3" src='img/terminal.svg' alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                        <p>  Электроника</p>
                       </button>
                    </div>
                </div>

               
                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                        <img    className="img4" src='img/case.svg'alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                        <p>  Работа</p>
                       </button>
                    </div>
                </div>
               

                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                        <img className="img5" src='img/gift.svg' alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                        <p>Личные вещи</p>
                       </button>
                    </div>
                </div>
               


                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                            <img className="img6" src='img/cal.svg'alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                        <p> Дом и Сад</p>
                       </button>
                    </div>
                </div>
               

                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                            <img className="img7" src='img/in.svg' alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                        <p>Стройка и ремонт</p>
                       </button>
                    </div>
                </div>


              

                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                            <img className="img8" src='img/game.svg' alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                            <p> Хобби и Спорт</p>
                       </button>
                    </div>
                </div>


               


                <div>
                    <div style={{padding: 0}}>
                       <button
                       style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', cursor: 'pointer'}}
                       onClick={ () =>  setIsModalOpen(true) }
                       
                       >
                            <img className="img9" src='img/Man.svg' alt="placeholder" style={{width: '50px', height: '50px', margin: '10px'}} />
                            <p> Бизнес и услуги</p>
                       </button>
                    </div>
                </div>
                
            </CarTwo>
        


          


       
        <Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setIsModalOpen(false)}
        style={
            {
                overlay: {
                    width:'100vw',
                    height: '100vh',
                    color: 'lightblue',
                    backgroundColor: 'rgba(255, 255, 255, 0.784618)',
                    zIndex: '20001'
                }
            }
        }>

            <Car2/>
           <div className="content">
                <div className="content-wrapper">
                    <ul className="links">
                        <h4>Телефоны</h4>
                        <h4>Компьютеры</h4>
                        <h4>Фото / видео</h4>
                        <h4>Тв / видеотехника</h4>
                        <h4>Аудиотехника</h4>
                    </ul>
                    
                    <ul className="links">
                       <h4>Телефоны</h4>
                        <h4>Компьютеры</h4>
                        <h4>Фото / видео</h4>
                        <h4>Тв / видеотехника</h4>
                        <h4>Аудиотехника</h4>
                    </ul>

                    <ul className="links">
                      <h4>Телефоны</h4>
                        <h4>Компьютеры</h4>
                        <h4>Фото / видео</h4>
                        <h4>Тв / видеотехника</h4>
                        <h4>Аудиотехника</h4>
                    </ul>

                    <ul className="links">
                     <h4>Телефоны</h4>
                        <h4>Компьютеры</h4>
                        <h4>Фото / видео</h4>
                        <h4>Тв / видеотехника</h4>
                        <h4>Аудиотехника</h4>
                    </ul>
                </div>
           </div>
            <div>
                <button className="close_button" onClick={() => setIsModalOpen(false)}>
                    close
                </button>
            </div>
        </Modal>
        </div>
    )
}

export default Car2;