import { Link } from "react-router-dom";

function NotFound(){
    return (
        <>
            <h1>Ошибка 404</h1>
            <p>Страница, которую вы ищите, не найдена</p>
            <Link to='/layout'>Вернуться на главную</Link>
        </>
    );
}
export default NotFound;