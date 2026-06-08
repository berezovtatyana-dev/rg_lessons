import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/"
                    className={({ isActive }) => ( isActive ? 'nav-link actve' : 'nav-link')}
                    end>
                        Главная
                    </NavLink>
                    <NavLink to="/services"
                    className={({ isActive }) => ( isActive ? 'nav-link actve' : 'nav-link')}
                    >
                        Услуги
                    </NavLink>
                    <NavLink to="/about"
                    className={({ isActive }) => ( isActive ? 'nav-link actve' : 'nav-link')}
                    >
                    О нас    
                    </NavLink>
                    <NavLink to="/contact"
                    className={({ isActive }) => ( isActive ? 'nav-link actve' : 'nav-link')}
                    >
                    Контакты   
                    </NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;