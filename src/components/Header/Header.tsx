import { FaBars } from "react-icons/fa6";
import './Header.css'
import { ReactElement } from "react";
import headerContent from '../../mocks/content/header-content.json'

const Header = (): ReactElement => {

  const content = headerContent.data;
  const { about, contact, home, portfolio, achievements, skills } = content;

  return (
    <header className="header">
      <a href="#portfolio" className="logo">{portfolio}</a>
      <FaBars id="menu-icon" />
      <nav className="navbar">
        <a href="#home" className="active">{home}</a>
        <a href="#about">{about}</a>
        <a href="#achievements">{achievements}</a>
        <a href="#portfolio">{portfolio}</a>
        <a href="#skills">{skills}</a>
        <a href="#contact">{contact}</a>
      </nav>
    </header>
  )
}

export default Header