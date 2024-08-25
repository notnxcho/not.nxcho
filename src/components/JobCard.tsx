const JobCard = ({ timeframe, role, company, description }: JobCardProps) => {
  return (
    <div className="job-card-box">
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