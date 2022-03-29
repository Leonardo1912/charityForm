import './App.scss';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWallet, faShirt, faCashRegister} from "@fortawesome/free-solid-svg-icons";
import {faHand, faHeart, faCreditCard} from "@fortawesome/free-regular-svg-icons";
import {faPaypal} from "@fortawesome/free-brands-svg-icons";

function App() {
    let [activePerson, setActivePerson] = useState(true)
    let [[activeHelp, activeBank], setActiveHelp] = useState([0,false])
    let [activePayment, setActivePayment] = useState(0)
    const handleFocus = (target) => {
        if (target.value.length >= 4){
            if(target.nextSibling)
                target.nextSibling.focus();
        }
        if(target.value.length === 0){
            if(target.previousSibling)
                target.previousSibling.focus();
        }
    }
    return (
        <div className="App">
           <div className="container">
               <div className="header">Заповніть форму</div>
               <div className="person">
                   <div className={activePerson && "activePerson"} onClick={() => setActivePerson(true)}>Фіз. особа</div>
                   <div className={!activePerson && "activePerson"} onClick={() => setActivePerson(false)}>Юр. особа</div>
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
                   <div className="header">Види допомоги</div>
                   <div className="headerDescription">Ви можете змінити вид допомоги</div>
                   <form className="secondForm">
                       <div className="help">
                           <div className={activeHelp === 1 ? "activeHelp" : "itemHelp"} onClick={() => setActiveHelp([activeHelp=1])}>
                               <div className="">
                                   <FontAwesomeIcon icon={faHand} className="iconHelp"/>
                               </div>
                               <label htmlFor="">Зробити</label>
                           </div>
                           <div className={activeHelp === 2 ? "activeHelp" : "itemHelp"} onClick={() => {
                               setActiveHelp([activeBank?activeHelp=0:activeHelp=2,!activeBank])
                           }}>
                               <div className="">
                                   <FontAwesomeIcon icon={faWallet} className="iconHelp"/>
                               </div>
                               <label htmlFor="">Фінансова <br/> допомога</label>
                           </div>
                           <div className={activeHelp === 3 ? "activeHelp" : "itemHelp"} onClick={() => setActiveHelp([activeHelp=3])}>
                               <div>
                                   <FontAwesomeIcon icon={faShirt} className="iconHelp"/>
                               </div>
                               <label htmlFor="">Матеріальна <br/> допомога</label>

                           </div>
                           <div className={activeHelp === 4 ? "activeHelp" : "itemHelp"} onClick={() => setActiveHelp([activeHelp=4])}>
                               <div>
                                   <FontAwesomeIcon icon={faHeart} className="iconHelp"/>
                               </div>
                               <label htmlFor="">Волонтерство</label>
                           </div>
                       </div>
                       <div className={activeBank? "bank":"activeBank"}>
                           <div>
                               <label htmlFor="bank">Спосіб оплати</label>
                               <div className="paymentMethod">
                                   <div className={activePayment === 1 ? "activePayment" : "itemPayment"}
                                        onClick={() => setActivePayment(1)}>
                                       <div className="item">
                                           <FontAwesomeIcon icon={faCreditCard} className="icon"/>
                                           <div className="description">Карти Visa/MasterCard</div>
                                       </div>
                                   </div>
                                   <div className={activePayment === 2 ? "activePayment" : "itemPayment"}
                                        onClick={() => setActivePayment(2)}>
                                       <div className="item">
                                           <div className="text">Приват24</div>
                                           <div  className="description">Приват24</div>
                                       </div>
                                   </div>
                                   <div className={activePayment === 3 ? "activePayment" : "itemPayment"}
                                        onClick={() => setActivePayment(3)}>
                                       <div className="item">
                                           <FontAwesomeIcon icon={faCashRegister} className="icon"/>
                                           <div className="description">Термінали України</div>
                                       </div>
                                   </div>
                                   <div className={activePayment === 4 ? "activePayment" : "itemPayment"}
                                        onClick={() => setActivePayment(4)}>
                                       <div className="item">
                                           <div className="text">WebMoney</div>
                                           <div className="description">WebMoney</div>
                                       </div>
                                   </div>
                                   <div className={activePayment === 5 ? "activePayment" : "itemPayment"}
                                        onClick={() => setActivePayment(5)}>
                                       <div className="item">
                                           <FontAwesomeIcon icon={faPaypal} className="icon"/>
                                           <div className="description">PayPal</div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="cardBlock">
                               <label htmlFor="date">Введіть наступні данні</label>
                               <div className="card">
                                   <div className="numberCardBlock">
                                       <label htmlFor="numberCard">Номер карти</label>
                                       <div className="numberCard">
                                           <input type="text" onChange={event => handleFocus(event.target)} maxLength="4"/>
                                           <input type="text" onChange={event => handleFocus(event.target)} maxLength="4"/>
                                           <input type="text" onChange={event => handleFocus(event.target)} maxLength="4"/>
                                           <input type="text" onChange={event => handleFocus(event.target)} maxLength="4"/>
                                       </div>
                                   </div>
                                   <div className="secretCardDataBlock">
                                       <div className="secretCardData">
                                           <div className="label">
                                               <label htmlFor="term">Термін дії</label>
                                           </div>
                                           <div>
                                               <input type="text" maxLength="4"/>
                                           </div>
                                       </div>
                                       <div className="secretCardData">
                                           <label htmlFor="code">CVC/CVV</label>
                                           <div>
                                               <input type="text" maxLength="3"/>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </form>
               </div>
           </div>

        </div>
    );
}

export default App;
