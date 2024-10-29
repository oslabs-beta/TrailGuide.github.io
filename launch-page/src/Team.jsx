import './Team.scss';

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Meet the Team</h2>
        <p>Our amazing team behind TrailGuide.</p>
        <ul className="team-list">
          <li><strong>Sam:</strong> Full-stack Developer</li>
          <li><strong>Aidan:</strong> DevOps Engineer</li>
          <li><strong>Markus:</strong> Product Designer</li>
          <li><strong>Nancy:</strong> Data Scientist</li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
