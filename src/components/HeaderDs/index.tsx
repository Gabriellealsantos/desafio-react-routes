import { NavLink } from 'react-router-dom';
import './styles.css';
import homeSvg from '../../assets/Vector.svg'

export default function HeaderDs() {

    return (
        <header>

            <nav className="ds-nav-container">
                <NavLink to="/home" className={({ isActive }) => isActive ? "ds-activated" : "ds-disabled"}>
                    <p>Inicio</p>
                </NavLink>

                <NavLink to="/products" className={({ isActive }) => isActive ? "ds-activated" : "ds-disabled"}>
                    <p>Produtos</p>
                </NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? "pf-activated" : "ds-disabled"}>
                    <p>Sobre Nós</p>
                </NavLink>
            </nav>

            <div className="ds-header-content">
                <a href="/home" rel="noopener noreferrer">
                    <img src={homeSvg} alt="Home" />
                </a>
            </div>



        </header>
    );

}