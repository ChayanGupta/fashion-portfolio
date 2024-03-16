import { FaBars } from "react-icons/fa6";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
        <a href="#" className="logo">Portfolio</a>
        <FaBars id="menu-icon" />
        <nav className="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  )
}

export default Header