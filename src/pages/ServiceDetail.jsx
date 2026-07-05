import React from "react";
import { NavLink, Outlet, useParams, Link } from "react-router-dom";

import { servicesData } from "./services";

function ServiceDetail() {
    const {id} = useParams();
    const service = servicesData.find(s => s.id === parseInt(id));

    return (
        <div>
            <h2>Описание услуги</h2>
            <div>
            <h2 style={{color: 'salmon', textShadow: '1px 1px black'}}>{service.title}</h2>
                <span>Категория: {service.category}</span>
            </div>
            
            <div>
                <div>
                    <h3>Описание:</h3>
                    <p>{service.description}</p>
                </div>
            </div>
            <Link style={{color: "blue", fontStyle: 'italic', fontSize: '15px'}} to="/services">Вернуться к списку услуг</Link>
        </div>
    );
}

export default ServiceDetail;