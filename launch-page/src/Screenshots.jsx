
import './Screenshots.scss';

const Screenshots = () => {
  return (
    <section className="screenshots">
      <div className="container">
        <h2 className="section-title">Screenshots/Demo</h2>
        <div className="screenshot-gallery">
          <img src="path-to-dashboard-image.jpg" alt="Dashboard" />
          <img src="path-to-chart-image.jpg" alt="Chart" />
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
