
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How to Use the App</h2>
        <ol>
          <li>Connect your AWS IAM Account.</li>
          <li>View the Event Dashboard with different filters.</li>
          <li>Analyze events through various visualizations.</li>
          <li>Use the dark mode toggle to switch between themes.</li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
