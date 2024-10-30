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
          Engineering Lead, Full-Stack Engineer, Git Master
          <a className="LinkedIn"href="http://www.linkedin.com/in/aidanprior" target="_blank">LinkedIn</a>
          <a className='GitHub' href="https://github.com/aidanprior" target="_blank">GitHub</a>
            </div>
           <div className='teammate-box'>
          <img className="Headshot" src={Sam} alt="Sam Pic" />
          <strong>Sam Lariviere:</strong>
          Full-Stack Engineer, UI/UX Designer
          <a className="LinkedIn"href="https://www.linkedin.com/in/samuellariviere/" target="_blank">LinkedIn</a>
          <a className='GitHub' href="https://github.com/SamLarivs" target="_blank">GitHub</a>
            </div>
           <div className='teammate-box'>
          <img className="Headshot" src={Markus} alt="Markus Pic" />
          <strong>Markus Waung:</strong>
          Full-Stack Engineer, Data Scientist
            <a className="LinkedIn"href="https://www.linkedin.com/in/markus-waung/" target="_blank">LinkedIn</a>
            <a className='GitHub' href="https://github.com/mkw2107" target="_blank">GitHub</a>
          </div>
           <div className='teammate-box'>
          <img className="Headshot" src={Nancy} alt="Nancy Pic" />
          <strong> Nanyi Deng (Nancy):</strong>
          Full-Stack Engineer, AI/ML, Data Scientist
           <a className="LinkedIn"href="https://www.linkedin.com/in/nanyideng/" target="_blank">LinkedIn</a>
           <a className='GitHub' href="https://github.com/homosapientdream" target="_blank">GitHub</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
