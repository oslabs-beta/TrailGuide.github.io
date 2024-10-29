
import Hero from './Hero';
import Features from './Features';
import Download from './Download';
import Team from './Team';
import './styles.scss'; // Optional SCSS for any global styles
import Problem from './Problem';
import Solution from './Solution';
import HowItWorks from './HowItWorks';
import Screenshot from './Screenshots';

function App() {
  return (
    <div className="App">
      <Hero />
      <Download />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Screenshot />
      <Team />
    </div>
  );
}

export default App;
