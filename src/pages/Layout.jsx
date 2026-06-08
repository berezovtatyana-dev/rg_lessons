import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/"
                    className={({ isActive }) => ( isActive ? 'nav-link active' : 'nav-link')}
                    end>
                        Главная
                    </NavLink>
                    <NavLink to="/services"
                    className={({ isActive }) => ( isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Услуги
                    </NavLink>
                    <NavLink to="/about"
                    className={({ isActive }) => ( isActive ? 'nav-link active' : 'nav-link')}
                    >
                    О нас    
                    </NavLink>
                    <NavLink to="/contact"
                    className={({ isActive }) => ( isActive ? 'nav-link active' : 'nav-link')}
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