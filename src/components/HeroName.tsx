import { useInView } from "react-intersection-observer";

const HeroName = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin: '-40px 0px',
    })
  return (
    <div className="hero-text container">
      <div className={`name ${!!inView && 'in-view'}`} ref={ref}>
        <div className="name-box-container">CAMILA<span>CAMILA</span></div>
        <div className="name-box-container">SANCHEZ<span>SANCHEZ</span></div>
        <div className="name-box-container">VINIK<span>VINIK</span></div>
      </div>
    </div>
  );
};

export default HeroName;