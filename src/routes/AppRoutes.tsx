import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Galeria from "../pages/Galeria";
import Carrinho from "../pages/Carrinho.tsx";
import FinalizarPedido from "../pages/FinalizarPedido";
import Pedidos from "../pages/Pedidos";
import Perfil from "../pages/perfil.tsx";
import Fotografo from "../pages/Fotografo";
import Navbar from "../components/Navbar.tsx";
import Header from "../components/header.tsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
     <Header />
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/fotografo/:id" element={<Fotografo />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/finalizar-pedido" element={<FinalizarPedido />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
