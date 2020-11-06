import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import './app.scss';

const App = () => {
  return (
    <div>
      <Particles
        className="particles"
        params={particlesConfig} />
      burtu juceklis
    </div>
  );
}

export default App;
