const About = () => {
  return (
    <div className="about-wrapper">
        <div className="about-container container">
            <div className="label">ABOUT</div>
            <div className="description">
                I am a Frontend Developer and UX/UI Designer based in Montevideo, Uruguay.
                Passionate for my craft and for creating beautiful digital experiences, I enjoy working within professional teams.
                {/* I am always looking for new challenges and opportunities to grow as a professional and as an individual. */}
            </div>
            <div className="chips">
                <div className="chip">
                    <div className="number"><span>+ </span>20</div>
                    <div className="label">total projects</div>
                </div>
                <div className="chip">
                    <div className="number"><span>+ </span>4</div>
                    <div className="label">Years of experience</div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;