import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home">
            <h1>Добро пожаловать!</h1>
            <p>Наша спортивная школа оказывает разные услуги в области физической культуры и спорта</p>
            <div>
                <h2>Наши приемущества:</h2>
                <ul>
                    <li>Опытные тренеры</li>
                    <li>Индивидуальный подход</li>
                    <li>Современное оборудование</li>
                    <li>Удобное расположение</li>
                </ul>
            </div>
            <div>
                <p>
                    Подробнее изучить информацию о наших услугах можно на странице 
                    <Link to="/services"> Услуги</Link>
                </p>
            </div>
            <div>
                <h2>Мы будем рады видеть вас на наших занятиях</h2>
                <p>
                    Связаться с нами можно на странице
                    <Link to="/contact"> Контакты</Link>
                </p>
            </div>
        </div>
    );
}
export default Home;