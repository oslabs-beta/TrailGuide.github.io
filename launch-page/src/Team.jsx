import './Team.scss';
import Sam from './assets/Sam.jpg'
import Aidan from './assets/Aidan.jpg' 
import Markus from './assets/Markus.png'
import Nancy from './assets/Nancy.jpg'
const Team = () => {
  return (
    <section className="team">
      <div className="team-container">
        <h2 className="section-title">Meet the Team</h2>
        <p>Our amazing team behind TrailGuide.</p>
        <div className="team-list">
          <div className="teammate-box">
          <img className="Headshot" src={Aidan} alt="Aidan Pic" />
          <strong>Aidan Prior:</strong>
            Developer</div>
           <div className='teammate-box'>
          <img className="Headshot" src={Sam} alt="Sam Pic" />
          <strong>Sam Lariviere:</strong>
            Developer</div>
           <div className='teammate-box'>
          <img className="Headshot" src={Markus} alt="Markus Pic" />
          <strong>Markus Waung:</strong>
            Developer</div>
           <div className='teammate-box'>
          <img className="Headshot" src={Nancy} alt="Nancy Pic" />
          <strong> Nanyi Deng (Nancy):</strong>
           Developer</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
