import React from 'react';
import { useParams } from 'react-router-dom';

const SkillDetail = () => {
  const { skill } = useParams();

  return (
    <div>
      <h1 className="text-tertiary text-xl">Details about {skill}</h1>
      <p>Learn more about <a href={`https://www.w3schools.com/${skill.toLowerCase()}`} target="_blank" rel="noopener noreferrer">{skill}</a>.</p>
    </div>
  );
};

export default SkillDetail;
