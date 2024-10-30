import './Download.scss';

const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <h2 className="section-title">Get Started</h2>
        <p>Download the app from Docker Hub and check out the repository on GitHub.</p>
        <div className="buttons">
          <a href="https://hub.docker.com/r/trailguide/trailguide-prod" className="cta-button">Download on Docker Hub</a>
          <a href="https://github.com/oslabs-beta/TrailGuide" className="cta-button">View Repository</a>
        </div>
      </div>
    </section>
  );
};

export default Download;
