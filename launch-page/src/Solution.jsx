
import './Solution.scss';

const Solution = () => {
  return (
    <section className="solution">
      <div className="container">
        <h2 className="section-title">Our Solution</h2>
        <p>
          We built an app that connects to AWS CloudTrail to gather and display management events in a clear, user-friendly dashboard. With this tool, users can quickly identify, track, and respond to potential threats without the need to sift through vast amounts of data.
        </p>
        <p>The app also provides various visualizations of event data, making it easier for users to digest.</p>
      </div>
    </section>
  );
};

export default Solution;
