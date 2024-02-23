import './Hero.css'
import video from '../assets/video/bg.mp4'

function Hero() {
  return (
    <div className="Hero">
      <h1>
        Today's research,
        <br />
        tomorrow's innovation
      </h1>
<div className='videoback'></div>
        <video loop muted autoPlay>
          <source src={video} type="video/mp4" />
        </video>

    </div>
  );
}

export default Hero