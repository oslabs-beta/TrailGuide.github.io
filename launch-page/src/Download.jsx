import './Download.scss';

const Download = () => {
  return (
    <section className="download">
      <div className="container">
        <h2 className="section-title">Get Started</h2>
        <p>Download the app from Docker Hub and check out the repository on GitHub.</p>
        <div className="buttons">
          <a href="https://hub.docker.com" className="cta-button">Download on Docker Hub</a>
          <a href="https://github.com" className="cta-button">View Repository</a>
        </div>
      </div>
    </section>
  );
};

export default Download;
