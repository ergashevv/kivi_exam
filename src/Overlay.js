    import React, {useState} from 'react'
import CarTwo from  '../src/components/FirstPage/CarTwo/CarTwo'
import { Link } from 'react-router-dom'
import  './Overlay.scss'

import Modal from 'react-modal'
const Car2 = () => {
    const [modalIsOpen, setIsModalOpen] = useState(false)
    return (
        <div style={{ maxWidth: 1440, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    zIndex: '2000'
                }
            }
        }>

           
           <div className="addClient">
                        <div>
                            <button className="buttonClose" onClick={() => setIsModalOpen(false)}>
                                close
                            </button>
                        </div>
                <div className="addClient-wrapper">
                       
                    <ul className="links-add">
                        <h4>Рубрика</h4>
                        <Link to="/formPage">Детский мир</Link>
                        <Link to="/formPage">Недвижимость</Link>
                        <Link to="/formPage">Транспорт</Link>
                        <Link to="/formPage">Работа</Link>
                        <Link to="/formPage">Животные</Link>
                        <Link to="/formPage">Транспорт</Link>
                        <Link to="/formPage">Дом и сад</Link>
                        <Link to="/formPage">Электроника</Link>
                        <Link to="/formPage">Бизнес и услуги</Link>
                        <Link to="/formPage">Мода и стиль</Link>
                        <Link to="/formPage">Хобби, отдых и спорт</Link>

                    </ul>

                    <ul className="links-add">
                        <h4>Недвижимость</h4>
                        <Link to="/formPage">Квартиры</Link>
                        <Link to="/formPage">Дома</Link>
                        <Link to="/formPage">Земля</Link>
                        <Link to="/formPage">Гаражи / стоянки</Link>
                        <Link to="/formPage">Коммерческие помещения</Link>

                    </ul>
                </div>
           </div>
        </Modal>
        </div>
    )
}

export default Car2;
