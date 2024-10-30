
import './Screenshots.scss';
import Login from './assets/Login.png';
import Dashboard from './assets/Dashboard.png';
import Profile from './assets/Profile.png';
import RecentEvents from './assets/RecentEvents.png';
import EventsModal from './assets/Events-Modal.png';
import DarkMode from './assets/DarkMode.png';

const Screenshots = () => {
  return (
    <section className="screenshots">
      <div className="container">
        <h2 className="section-title">Screenshots/Demo</h2>
        <div className="screenshot-gallery">
          <img src={Login} alt="Login" />
          <img src={Profile} alt="Profile" />
          <img src={Dashboard} alt="DashBoard" />
          <img src={RecentEvents} alt="Recent Events" />
          <img src={EventsModal} alt="Events Modal" />
          <img src={DarkMode} alt="Dark Mode" />
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
