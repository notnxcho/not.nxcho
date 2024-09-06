import JobCard from "./JobCard";

const experiences = [
    {
        timeframe: { start: "Oct 2023", end: "Active" },
        role: "Lead UX Engineer",
        company: "SquadUp Labs",
        description: "Frontend development for the Vexels website and internal tools.",
    },  
    {
        timeframe: { start: "Sep 2021", end: "Oct 2023" },
        role: "UX Engineer",
        company: "CodigoDelSur",
        description: "Frontend development for the Vexels website and internal tools.",
    },
    {
        timeframe: { start: "Mar 2021", end: "Sep 2021" },
        role: "Junior Frontend Developer",
        company: "Vexels",
        description: "Frontend development for the Vexels website and internal tools.",
    },
];

const WorkExperience = () => {
  return (
    <div className="work-exp-wrapper" id="work">
      <div className="work-exp-bg">
        <div className="list container">
          {experiences.map( exp => {
            return <JobCard {...exp}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;