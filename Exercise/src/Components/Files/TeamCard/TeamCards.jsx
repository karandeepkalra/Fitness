import React from 'react';
import './TeamCards.css';
import Profile1 from '../../../assets/Profile1.jpeg'
import Profile2 from '../../../assets/Profile2.jpeg'


const TeamCard = ({ name, role, background, linkedInUrl, avatarUrl }) => (
  <div className="team-card">
    <div className="avatar-container">
      {avatarUrl ? (
        <img 
          src={avatarUrl} 
          alt={name} 
          className="avatar-image"
        />
      ) : (
        <div className="avatar-placeholder" />
      )}
    </div>
    
    <h3 className="member-name">{name}</h3>
    <p className="member-role">{role}</p>
    <p className="member-background">{background}</p>
    
    <a 
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-button"
    >
      <svg 
        className="linkedin-icon" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
      Connect on LinkedIn
    </a>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Karandeep Kaur",
      role: "Product Manager",
      background: "10+ years experience in UX/UI design",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: Profile2
    },
    {
      name: "Anushka Malik",
      role: "Senior Developer",
      background: "Full-stack expert with focus on React & Node.js",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: Profile1
    },
  ];

  return (
    <div className="team-section">
      <h1 className="section-title">Meet Our Team</h1>
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;