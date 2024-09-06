import { useInView } from "react-intersection-observer";

const JobCard = ({ timeframe, role, company, description }: JobCardProps) => {
  const {ref, inView} = useInView({ 
    triggerOnce: true,
    rootMargin: '-20px 0px',
  })
  return (
    <div className={`job-card-box ${!!inView && 'in-view'}`} ref={ref}>
      <div className="timeframe">
        {timeframe.start}<div className="separator"/>{timeframe.end}
      </div>
      <div className="role">{role}</div>
      <div className="company">{company}</div>
      <div className="description">{description}</div>
    </div>
  );
};

interface JobCardProps {
  timeframe: { start: string; end: string }
  role: string
  company: string
  description: string
}
export default JobCard