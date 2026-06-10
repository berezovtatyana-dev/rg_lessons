import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Services.css';

const servicesData = [
    { id: 1, title: 'Групповые занятия по художественной гимнастике', category: 'Художественная гимнастика', description: 'Занятия групп спортивно-оздоровительного этапа с элементами художественной гимнастики' },
    { id: 2, title: 'Индивидуальные занятия по художественной гимнастике', category: 'Художественная гимнастика', description: 'Тренировочные занятия по художественной гимнастике (индивидуальные или в минигруппах до 3-х человек). Индивидуальные занятия позволяют уделить внимание отдельному ребенку, отработать наиболее значимые элементы' },
    { id: 3, title: 'Групповые занятия по хореографии', category: 'Хореография', description: 'Занятия направлены на формирование навыков исполнения танца, приобретение знаний в области хореографического искусства' },
    { id: 4, title: 'Индивидуальные занятия по хореографии', category: 'Хореография', description: 'Занятия направлены на формирование навыков исполнения танца, приобретение знаний в области хореографического искусства. Индивидуальные занятия позволяют уделить внимание отдельному ребенку, отработать наиболее значимые элементы' },
    { id: 5, title: 'Групповые занятия по эстетической гимнастике', category: 'Эстетика', description: 'Программа «Эстетическая гимнастика» направлена на массовый уровень – оздоровительно-развивающую гимнастику для гармоничного физического развития детей. Данная программа служит фундаментом для эффективного построения многолетней подготовки по эстетической гимнастике' },
    { id: 6, title: 'Индивидуальные занятия по эстетической гимнастике', category: 'Эстетика', description: 'Программа «Эстетическая гимнастика» направлена на массовый уровень – оздоровительно-развивающую гимнастику для гармоничного физического развития детей. Данная программа служит фундаментом для эффективного построения многолетней подготовки по эстетической гимнастике. Индивидуальные занятия позволяют уделить внимание отдельному ребенку, отработать наиболее значимые элементы' },
];

const categories = ['Все', 'Художественная гимнастика', 'Хореография', 'Эстетика'];

function Services() {

    const [searchCategory, setSearchCategory] = useState('');
    const [activeCategory, setActiveCategory] = useState('Все');
    const filteredServices = servicesData.filter(service => {
        const matchesCategory = activeCategory === 'Все' || service.category === activeCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchCategory.toLowerCase());
        return matchesCategory && matchesSearch;

        return ( 
        <div className="services">
            <h1>Наши услуги</h1>
            <div className="filters">
                <input type="text"
                placeholder="Введите название"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                 />
            </div>
            <div className="listService">
                {filteredServices.length > 0 ? (
                    filteredServices.map(service => (
                        <div key={service.id} className="service-card">
                            <Link to={`/services/${service.id}`} className="service-link" />
                        </div>
                    ))
                ) : (
                    <div>
                        NONE
                    </div>

                )}

            </div>
        </div>
    );

    });
}

export default Services;