import React from 'react';
import '../styles/CallTaxi.css';

const orderComponent = () =>(
    <div className = 'order'>
        <h2 className = 'order__caption'>Вызов такси</h2>
        <div className = 'order__menu-wrap'>
            <div className = 'order__menu-direction'>
                <input type="text"/>
                <select name="place" id="" className = 'order__menu'>
                    <option value="1" className="order__place">Пушкинска</option>
                    <option value="2" className="order__place">Васильевская</option>
                    <option value="3" className="order__place">Дмитровская</option>
                </select>
            </div>
            <div className = 'order__menu-direction'>
                <input type="text"/>
                <select name="place" id="" className = 'order__menu'>
                    <option value="4" className="order__place">Бибирево</option>
                    <option value="5" className="order__place">Алешкино</option>
                    <option value="6" className="order__place">ЕЛисеево</option>
                </select>
            </div>
        </div>
    </div>

);

export default orderComponent; 

