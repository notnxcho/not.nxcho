import { useInView } from "react-intersection-observer";
import Circles from "./Circles";
import HeroName from "./HeroName";
import TimeBox from "./TimeBox";

const Hero = () => {
    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault()
        const section = document.getElementById(sectionId)
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
    })

  return (
    <div className="hero-container" ref={ref}>
        <div className={`header-container container ${!!inView && 'in-view'}`}>
            <TimeBox/>
            <div className="header-links">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>ABOUT</a>
                <a href="#work" onClick={(e) => scrollToSection(e, 'work')}>WORK</a>
                <a href="#resume" onClick={(e) => scrollToSection(e, 'resume')}>RESUME</a>
            </div>
            <div className="header-cta">WANNA TALK?</div>
        </div>

        <HeroName/>

        <div className={`hero-footer-container container ${!!inView && 'in-view'}`}>
            <div className="hero-footer-content container">
                <div className="role">SENIOR UX ENGINEER</div>
                <div className="company"><span>CURRENTLY</span><div>@SQUADUP</div></div>
            </div>
            <Circles/>
        </div>
    </div>
  );
};

export default Hero;