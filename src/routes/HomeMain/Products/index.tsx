import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';

export default function Products() {
  return (
    <>
      <div className='product-container'>
        <nav className="nav-container">
          <NavLink to="/products/computers" className={({ isActive }) => isActive ? "ds-activated" : "ds-disabled"}>
            <p>Computadores</p>
          </NavLink>

          <NavLink to="/products/eletronics" className={({ isActive }) => isActive ? "ds-activated" : "ds-disabled"}>
            <p>Eletrônicos</p>
          </NavLink>

          <NavLink to="/products/books" className={({ isActive }) => isActive ? "ds-activated" : "ds-disabled"}>
            <p>Livros</p>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}