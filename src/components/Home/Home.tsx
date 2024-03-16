import { ReactElement } from 'react'
import './Home.css'
import homeContent from '../../mocks/content/home-content.json'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import MainImage from '../../assets/main-image.png'

const Home = (): ReactElement => {

  const content = homeContent.data;
  const { description, line1, line2, name, profession } = content;

  return (
    <section className='home' id='home'>
      <div className="home-content">
        <h3>{line1}</h3>
        <h1>{name}</h1>
        <h3>{line2}<span>{profession}</span></h3>
        <p>{description}</p>
        <div className="social-media">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
      <div className='home-img'>
        <img src={MainImage} alt="main-image" />
      </div>
    </section>
  )
}

export default Home