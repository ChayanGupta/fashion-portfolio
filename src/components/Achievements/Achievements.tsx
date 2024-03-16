import { ReactElement, useState } from "react"
import Carousel from "react-multi-carousel";
import Certificate from '../../assets/Certificate.jpg'
import Certificate1 from '../../assets/Certificate1.jpg'
import Certificate2 from '../../assets/Certificate2.jpg'
import Certificate3 from '../../assets/Certificate3.jpg'
import Certificate4 from '../../assets/Certificate4.jpg'
import './Achievements.css'

const Achievements = (): ReactElement => {

    const [isAutoPlay, setIsAutoPlay] = useState(true)

    const onMouseEnter = () => {
        setIsAutoPlay(false);
    }
    
    const onMouseLeave = () => {
        setIsAutoPlay(true);
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="achievements" id="achievements">
            <div>
                <h1>Achievements</h1>
            </div>
            <div className="achivements-body">
                <Carousel responsive={responsive}
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                    draggable={false}
                    ssr={true}
                    infinite={true}
                    autoPlay={isAutoPlay}
                    autoPlaySpeed={2500}
                    keyBoardControl={true}
                >
                    <div className="image-div">
                        <img src={Certificate1} alt="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                    <div className="image-div">
                        <img src={Certificate2} alt="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                    <div className="image-div">
                        <img src={Certificate3} alt="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                    <div className="image-div">
                        <img src={Certificate4} alt="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                    <div className="image-div">
                        <img src={Certificate} alt="" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                    </div>
                </Carousel>
                <div className="achievements-list">
                    <ul>
                        <li>Won <span>Best Designer of the Year Award (2023)</span> at KIFD Indore in the Annual Design show.</li>
                        <li>Won <span>1st prize in the illustration competition</span> held in IIFT Bhopal.</li>
                        <li>Won <span>1st prize in Madhubani art</span> in an exhibition cum competition held in KIFD.</li>
                        <li><span>Successfully completed course in garment making</span> from Hunar Online Course.</li>
                        <li><span>Successfully completed course in embroidery ribbon stitching</span> from Hunar online course.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Achievements