import { ReactElement } from "react"
import './Skills.css'
import Illustration from '../../assets/illustration.jpg'
import Cad from '../../assets/cad.jpg'
import CostumeDesigning from '../../assets/costume-designing.jpg'
import Coral from '../../assets/coral.jpg'
import Resin from '../../assets/resin.jpg'

const Skills = (): ReactElement => {
    return (
        <section className="skills" id="skills">
            <div className="skills-heading">
                <h1>Skills</h1>
            </div>
            <div className="skills-grid">
                <div>
                    <img src={Illustration} alt="" />
                    <h2 className="skill-name">Illustration Sketches</h2>
                </div>
                <div>
                    <img src={CostumeDesigning} alt="" />
                    <h2>Costume Designing</h2>
                </div>
                <div>
                    <img src={Cad} alt="" />
                    <h2>Cad</h2>
                </div>
                <div>
                    <img src={Resin} alt="" />
                    <h2>Painting and Resin art</h2>
                </div>
                <div>
                    <img src={Coral} alt="" />
                    <h2>Coral</h2>
                </div>
                
            </div>
        </section>
    )
}

export default Skills