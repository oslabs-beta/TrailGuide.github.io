import './Hero.scss'; // You will create a separate SCSS file for styles

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Welcome to TrailGuide</h1>
        <p className="hero-subtitle">
          A tool to help you easily monitor and respond to AWS CloudTrail events with a clean and user-friendly interface.
        </p>
        <a href="#features" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
