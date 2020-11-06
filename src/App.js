import Particles from 'react-particles-js';
import particlesConfig from './particlesjs-config.json';
import './app.scss';

const App = () => {
  return (
    <div>
      <div className="top-line"></div>
      <Particles
        className="particles"
        params={particlesConfig} />
      <h1 className="title">Burtu Juceklis</h1>
    </div>
  );
}

export default App;
