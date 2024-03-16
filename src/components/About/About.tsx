import { ReactElement } from "react"
import AboutImage from '../../assets/about-image.png'
import './About.css'

const About = () : ReactElement => {
  return (
    <section className="about" id="about">
        <div className="about-img">
            <img src={AboutImage} alt="about-img" />
        </div>
        <div className="about-content">
            <h2 className="heading">ABOUT <span>Me</span></h2>
            <h3>Fashion Designer</h3>
            <p>👋 Hi there! I'm Shivani Gupta, a passionate fashion designer fueled by creativity and a love for all things stylish. With a focus on elegance and innovation, I craft designs that inspire confidence and captivate the imagination. Welcome to my world of fashion, where every stitch tells a story. Let's create something beautiful together! ✨</p>
            <a href="#" className="btn">Let's Connect</a>
        </div>
    </section>
  )
}

export default About