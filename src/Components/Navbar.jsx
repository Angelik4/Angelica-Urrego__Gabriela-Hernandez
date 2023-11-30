import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from 'react';
import { ThemeContext, themes } from "../Components/utils/global.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav >
            <ul>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/favoritos">Favoritos</Link>
                </li>
            </ul>
            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
            <button className="btnTheme" onClick={toggleTheme}>{theme === themes.light ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</button>
        </nav>
    );
};

export default Navbar;
