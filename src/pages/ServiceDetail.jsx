import React from "react";
import { NavLink, Outlet, useParams, Link } from "react-router-dom";

import { servicesData } from "./services";

function ServiceDetail() {
    const {id} = useParams();
    const service = servicesData.find(s => s.id === parseInt(id));

    return (
        <div>
            <h1>Описание услуги</h1>
            <div>
                <h1>{service.title}</h1>
                <span>Категория: {service.category}</span>
            </div>
            
            <div>
                <div>
                    <h3>Описание:</h3>
                    <p>{service.description}</p>
                </div>
            </div>
            <Link to="/services">Вернуться к списку услуг</Link>
        </div>
    );
}

export default ServiceDetail;