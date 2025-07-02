import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaImages, FaHome, FaBox, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

export default function MobileNavbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/carrinho", icon: <FaShoppingCart />, label: "Carrinho" },
    { to: "/galeria", icon: <FaImages />, label: "Galeria" },
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/pedidos", icon: <FaBox />, label: "Pedidos" },
    { to: "/perfil", icon: <FaUser />, label: "Perfil" },
  ];

  return (
    <nav className="mobile-navbar">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`nav-item ${pathname === link.to ? "active" : ""}`}
        >
          <div className="icon-circle">{link.icon}</div>
        </Link>
      ))}
    </nav>
  );
}
