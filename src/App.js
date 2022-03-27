import './App.scss';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWallet, faShirt, faCashRegister} from "@fortawesome/free-solid-svg-icons";
import {faHand, faHeart, faCreditCard} from "@fortawesome/free-regular-svg-icons";
import {faPaypal} from "@fortawesome/free-brands-svg-icons";

function App() {
    let [active, setActive] = useState(true)
    return (
        <div className="App">
            <div className="header">Заповніть форму</div>
            <div className="person">
                <div className={active && "active"} onClick={() => setActive(true)}>Фіз. особа</div>
                <div className={!active && "active"} onClick={() => setActive(false)}>Юр. особа</div>
            </div>
            <div className="form">
                <form className="firstForm">
                    <div className="firstFormBlock">
                        <div className="name">
                            <div className="itemName">
                                <label htmlFor="firstName">Ім'я</label>
                                <input type="text"/>
                            </div>
                            <div className="itemName">
                                <label htmlFor="secondName">Фамілія</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="company">Назва компанії, організації</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email-адрес</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Номер телефону</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="firstFormBlock">
                        <div>
                            <label htmlFor="country">Країна</label>
                            <input type="text"/>
                        </div>
                        <div className="name">
                            <div className="itemName">
                                <label htmlFor="city">Місто</label>
                                <input type="text"/>
                            </div>
                            <div className="itemName">
                                <label htmlFor="region">Штат, район</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address">Адреса</label>
                            <input type="text"/>
                        </div>
                        <div className="post">
                            <label htmlFor="post">Поштовий індекс</label>
                            <input type="text"/>
                        </div>
                    </div>
                </form>
                <form className="secondForm">
                    <div className="header">Види допомоги</div>
                    <div className="headerDescription">Ви можете змінити вид допомоги</div>
                    <div>
                        <div>
                            <div>
                                <div className="">
                                    <FontAwesomeIcon icon={faHand} className="itemBank"/>
                                </div>
                                <label htmlFor="">Зробити</label>
                            </div>
                            <div>
                                <div className="">
                                    <FontAwesomeIcon icon={faWallet} className="itemBank"/>
                                </div>
                                <label htmlFor="">Фінансова допомога</label>
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faShirt} className="itemBank"/>
                                </div>
                                <label htmlFor="">Матеріальна допомога</label>

                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} className="itemBank"/>
                                </div>
                                <label htmlFor="">Волонтерство</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="bank">Спосіб оплати</label>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCreditCard}/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCreditCard}/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCashRegister}/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCashRegister}/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faPaypal}/>
                                </div>
                            </div>
                            <div>
                                <div className="card">
                                    <label htmlFor="date">Введіть наступні данні</label>
                                    <div>
                                        <label htmlFor="numberCard">Номер карти</label>
                                        <div>
                                            <input type="text"/>
                                            <input type="text"/>
                                            <input type="text"/>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="term">Термін дії</label>
                                            <div>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="code">CVC/CVV</label>
                                            <div>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default App;
