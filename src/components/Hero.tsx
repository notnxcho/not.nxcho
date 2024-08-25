import Circles from "./Circles";
import TimeBox from "./TimeBox";

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="header-container container">
            <TimeBox/>
            <div className="header-links">
                <a href="#">ABOUT</a>
                <a href="#">WORK</a>
                <a href="#">RESUME</a>
            </div>
            <div className="header-cta">WANNA TALK?</div>
        </div>

        <div className="hero-text container">
            <div className="name">NACHO LORENZO FERRETJANS</div>
        </div>

        <div className="hero-footer-container">
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