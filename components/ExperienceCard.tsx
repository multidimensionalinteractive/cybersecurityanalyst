import React from 'react';

interface ExperienceCardProps {
  title: string;
  description: string;
  details: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, details }) => {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default ExperienceCard;
