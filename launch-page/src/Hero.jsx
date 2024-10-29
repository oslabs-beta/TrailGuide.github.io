import './Hero.scss'; // You will create a separate SCSS file for styles
import TrailGuide from './assets/TRAILGUIDE.png';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-header">
        <h2 className="hero-title">Welcome to</h2>
        <img className="hero-image" src={TrailGuide} alt="Trailguide"></img>
        </div>
        <p className="hero-subtitle">
          A tool to help you easily monitor and respond to AWS CloudTrail events with a clean and user-friendly interface.
        </p>
        <a href="#features" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
