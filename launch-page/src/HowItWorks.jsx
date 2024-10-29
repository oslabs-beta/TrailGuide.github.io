
import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How to Use the App</h2>
        <ol>
          <li>Sign-up and Log-in</li>
          <li>Connect your AWS IAM Account through the User Profile.</li>
          <li>Analyze events through various visualizations and Charts in the Home Page.</li>
          <li>View the Event Dashboard to See the most Recent Events in your AWS account.</li>
          <li>Use the dark mode toggle to switch between themes.</li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
