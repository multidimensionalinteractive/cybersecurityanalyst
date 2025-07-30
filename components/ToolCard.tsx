import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  useCase: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, useCase }) => {
  return (
    <div className="tool-card">
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <p className="use-case">Use Case: {useCase}</p>
    </div>
  );
};

export default ToolCard;
